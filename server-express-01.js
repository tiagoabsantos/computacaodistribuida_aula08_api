const express = require('express')
const app = express()
const PORT = 5000

app.get('/', (req, res) =>
         res.send('Olá Mundo...')
      )

app.listen(PORT, () =>
         console.log(`servidor a executar em http://localhost:${PORT}`))