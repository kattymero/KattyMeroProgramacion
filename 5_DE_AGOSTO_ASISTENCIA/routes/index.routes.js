import { Router } from "express";
import ejemplo from "./ejemplo.routes.js";
import asistencia from "./asistencia.routes.js"; 

const indexRoutes = Router();

indexRoutes.use('/ejemplo', ejemplo);
indexRoutes.use('/asistencia', asistencia); 

export default indexRoutes;
