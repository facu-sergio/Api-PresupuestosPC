const mongoose = require('mongoose');

const {Schema} = mongoose;

const presupuestoSchema = new Schema({
    nombre: {type: String, required:true },
    mother: {type: String, required:true },
    pMother: { type: Number, required: true},
    procesador: {type: String, required:true },
    pProcesador:{ type: Number, required: true},
    ram: {type: String, required:true },
    pRam: { type: Number, required: true},
    fuente: {type: String, required:true },
    pFuente: { type: Number, required: true},
    disco: {type: String, required:true },
    pDisco: { type: Number, required: true},
    grafica: {type: String, required:true },
    pGrafica: { type: Number, required: true},
    gabinete: {type: String, required:true },
    pGabinete:{type: Number, required:true },
    pTotal:{ type: Number, required: true},
});

module.exports = mongoose.model('presupuestos', presupuestoSchema);