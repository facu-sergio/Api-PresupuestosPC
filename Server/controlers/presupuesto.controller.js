const Presupuesto = require('../models/presupuesto');

const presupuestoCtrl = {};


presupuestoCtrl.obtenerPresupuestos = async (req ,res) => {
     const presupuestos = await Presupuesto.find();
     res.json(presupuestos);

};

presupuestoCtrl.crearPresupuesto = async (req,res) => {
    const presupuesto = new Presupuesto(req.body);
    await presupuesto.save();
    res.json({
        'status':'presupuesto guardado'
    });
};

presupuestoCtrl.obtenerPresupuesto = async (req,res) => {
    const presupuesto = await Presupuesto.findById(req.params.id);
    res.json(presupuesto);
}

presupuestoCtrl.editarPresupuesto = async (req,res) => {
    const actPresupuesto = new Presupuesto(req.body);
    await Presupuesto.findByIdAndUpdate(req.params.id,{$set: actPresupuesto }, {new:true});
    res.json({status: 'presupuesto actualizado'});
}

presupuestoCtrl.borrarPresupuesto = async (req,res ) => {
    await Presupuesto.findByIdAndDelete(req.params.id);
    res.json({status: 'Presupuesto eliminado correctamente' });
}
module.exports = presupuestoCtrl;