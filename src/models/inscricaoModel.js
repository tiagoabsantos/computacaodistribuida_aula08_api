'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inscricaoSchema = new Schema({
    nome: {
        type: String,
        required: 'nome da pessoa a inscrever'
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
}, {collection: 'InscricaoCollection'}   );
module.exports = mongoose.model('Inscricao', inscricaoSchema);