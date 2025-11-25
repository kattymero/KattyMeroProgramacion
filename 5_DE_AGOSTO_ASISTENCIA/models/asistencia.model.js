import mongoose from "mongoose";

const asistenciaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    horaEntrada: {
        type: String,
        required: true
    },
    horaSalida: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});

const Asistencia = mongoose.model('Asistencia', asistenciaSchema);
export default Asistencia;
