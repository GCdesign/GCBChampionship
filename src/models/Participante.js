'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Participante = new Schema({
    Inscricao: {type: Number, required:true},
    Nome:{type:String,required:true},
    Media:{type:Number},
    Ritmo:{type:String, required:true},
    Classe:{type:String, required:true},
    Media:{type: Number},
    Notas: [{
        _id:false,
        Nota:{type: Number, required:true}
        
    }]
 
});

module.exports = mongoose.model('Participante', Participante);
