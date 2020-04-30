"use strict";
const mongoose = require("mongoose");
const Insc = mongoose.model("Inscricao");

exports.lista_todas_inscricoes = function (req, res) {
  Insc.find({}, function (err, inscricao) {
    if (err) res.send(err);
    res.json(inscricao);
  });
};

// especificação do controlador "nova_inscrição"
exports.nova_inscricao = function (req, res) {
  const nomeInscrito = req.body.nome;
  console.log(nomeInscrito);
  if (!nomeInscrito) {
    res.status(400).json({ message: "todos os campos são necessários" });
  } else {
    const novaInscricao = new Insc();
    novaInscricao.nome = nomeInscrito;
    novaInscricao.save((err, inscricao) => {
      if (err) {
        res.send(err);
      } else {
        res.status(401).json(inscricao);
      }
    });
  }
};

// ------------------------------------

exports.obtem_uma_inscricao = function (req, res) {
  Insc.findById(req.params.id, function (err, inscricao) {
    if (err) res.send(err);
    res.json(inscricao);
  });
};

exports.alterar_uma_inscricao = function (req, res) {
  Insc.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    function (err, inscricao) {
      if (err) res.send(err);
      res.json(inscricao);
    }
  );
};

exports.eliminar_uma_inscricao = function (req, res) {
  Insc.remove(
    {
      _id: req.params.id,
    },
    function (err, inscricao) {
      if (err) res.send(err);
      res.json({ message: "inscricao eliminada" });
    }
  );
};
