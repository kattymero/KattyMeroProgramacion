import { Router } from "express";
const ejemplo = Router();

// GET ALL
ejemplo.get('/', (req, res) => {
  res.json({
    msg: 'Obtener todos los registros',
  });
});

// GET ONE (con id)
ejemplo.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    msg: 'Obtener un registro por ID',
    id,
  });
});

// POST
ejemplo.post('/', (req, res) => {
  const body = req.body;
  res.json({
    msg: 'Crear un nuevo registro',
    body,
  });
});

// PUT
ejemplo.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    msg: 'Actualizar registro',
    id,
    body,
  });
});

// DELETE
ejemplo.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    msg: 'Eliminar registro',
    id,
  });
});

export default ejemplo;
