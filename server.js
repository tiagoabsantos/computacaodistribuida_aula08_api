const express = require('express')
const cors = require('cors')
const PORT = 5000

let BD =  require('./src/config/configBDMongo');
const InscricaoModel =  require('./src/models/inscricaoModel');
const InscricaoRoutes =  require('./src/routes/inscricaoRoutes');

// configuração do express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
      next();
});


// registar as rotas
InscricaoRoutes(app);

app.listen(PORT, () =>
    console.log(`servidor a executar em http://localhost:${PORT}`));


