const  express = require('express');
const router = express.Router();

const presupuestoCtrl = require('../controlers/presupuesto.controller');

router.get('/', presupuestoCtrl.obtenerPresupuestos);
router.post('/', presupuestoCtrl.crearPresupuesto);
router.get('/:id', presupuestoCtrl.obtenerPresupuesto);
router.put('/:id',presupuestoCtrl.editarPresupuesto);
router.delete('/:id', presupuestoCtrl.borrarPresupuesto);




module.exports = router;