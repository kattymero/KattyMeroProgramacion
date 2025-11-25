import { Router } from "express";
import { getAsistencias, postAsistencia, putAsistencia, deleteAsistencia } from "../controllers/asistencia.controller.js";

const asistencia = Router();

asistencia.get('/', getAsistencias);
asistencia.post('/', postAsistencia);
asistencia.put('/:id', putAsistencia);
asistencia.delete('/:id', deleteAsistencia);

export default asistencia;
