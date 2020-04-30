const express = require('express')
const app = express()
const PORT = 5000


const myMiddleware = (req, res, next) =>  {
     console.log('a executar função myMiddleware')
     next() };

// em todos os pedidos, será executada a função
app.use(myMiddleware)

app.get('/', (req, res) =>
    res.send('Olá Mundo...')
)

app.listen(PORT, () => {
    console.log(`servidor a executar em http://localhost:${PORT}`);
})