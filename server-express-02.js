const express = require('express')
const app = express()
const PORT = 5000

app.get('/', (req, res) =>
                  res.send('Olá Mundo...')
      )
// Responder a um pedido POST na rota raíz (/):
app.post('/', (req, res) => {
      res.send('POST /')
})
// Responder a um pedido PUT na rota /utilizador:
app.put('/utilizador', (req, res) => {
          res.send('PUT  /utilizador')
    })
// Responder a um pedido DELETE na rota /utilizador:
app.delete('/utilizador', (req, res) => {
          res.send('DELETE /utilizador')
    })
app.listen(PORT, () => {
    console.log(`servidor a executar em http://localhost:${PORT}`);
})