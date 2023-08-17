const express = require('express')
const path = require("path")
const app = express()
const port = 3000

const base_path = path.join(__dirname, "templates")
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())
app.use(express.static('public'))

app.get("/alunos/add", (req, res) => {
    res.sendFile(`${base_path}/alunoform.html`)
})

app.get("/produtos/add", (req, res) => {
    res.sendFile(`${base_path}/produto.html`)
})

app.post('/alunos/save', (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const matricula = req.body.matricula
    console.log(`Matricula: ${matricula}, Nome: ${name}`)
    res.sendFile(`${base_path}/alunoform.html`)
})
app.post('/produtos/save', (req, res) => {
    console.log(req.body)
    const produto = req.body.produto
    const preco = req.body.preco
    console.log(`Preco: ${preco}, Preco: ${preco}`)
    res.sendFile(`${base_path}/produto.html`)
})

app.get("/disciplina", (req, res) => {
    res.sendFile(`${base_path}/disc.html`)
})
app.listen(port, () =>{
    console.log(`App rodando na porta ${port}`)
})