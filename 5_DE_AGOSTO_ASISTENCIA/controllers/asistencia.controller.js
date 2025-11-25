import Asistencia from "../models/asistencia.model.js";
import mongoose from "mongoose";

export const getAsistencias = async (req, res) => {
    try {
        const asistencias = await Asistencia.find({}, { __v: 0 });
        return res.status(200).json({ asistencias });
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener asistencias" });
    }
};

export const postAsistencia = async (req, res) => {
    const body = req.body;
    const asistencia = new Asistencia(body);
    try {
        await asistencia.save();
        return res.status(201).json({ asistencia });
    } catch (error) {
        return res.status(500).json({ msg: "Error al guardar la asistencia" });
    }
};

export const putAsistencia = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: "ID no válido" });
        }
        const asistencia = await Asistencia.findByIdAndUpdate(id, body, { new: true });
        if (!asistencia) return res.status(404).json({ msg: "Asistencia no encontrada" });
        res.status(200).json({ asistencia });
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar la asistencia" });
    }
};

export const deleteAsistencia = async (req, res) => {
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: "ID no válido" });
        }
        const asistencia = await Asistencia.findByIdAndDelete(id);
        if (!asistencia) return res.status(404).json({ msg: "Asistencia no encontrada" });
        res.status(200).json({ msg: "Asistencia eliminada" });
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar la asistencia" });
    }
};
