'use strict';
module.exports = function (app) {
    const insc =
        require('../controllers/inscricaoController');

    // rotas definidas para a API Restful inscricoes
    
    // -- rota  /inscricao    métodos: GET, POST
    app.route('/inscricao')
        .get(insc.lista_todas_inscricoes)
        .post(insc.nova_inscricao);

    // -- rota  /inscricao/:id    métodos: GET,PUT,DELETE  params: :id
    app.route('/inscricao/:id')
        .get(insc.obtem_uma_inscricao)
        .put(insc.alterar_uma_inscricao)
        .delete(insc.eliminar_uma_inscricao);
};