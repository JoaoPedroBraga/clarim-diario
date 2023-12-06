const express = require('express');
const bcrypt = require('bcrypt');
const usuarioModel = require('./src/module/usuario/usuario.moldel');
const app = express();
app.use(express.json());

app.get('/usuarios', async (req, res) => {
    const usuarios = await usuarioModel.find({});
    return res.status(200).json(usuarios);
});

app.post('/usuarios', async (req, res) => {
    if (!req.body.email){
        return res.status(400).json({ message: "O campo email e obrigtório"})
    }
    if (!req.body.senha){
        return res.status(400).json({ message: "O campo senha e obrigtório"})
    }

    //TODO verificar se o usuario ja existe na base
    const usuarioExistente = await usuarioModel.find({email: req.body.email});
    if (usuarioExistente.length) {
        return res.status(400).json({ message: "usuarioExistente"})
    }

    const senhaCriptografada = bcrypt.hashSync(req.body.senha, 10);
    
    const usuario = await usuarioModel.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: senhaCriptografada,
    });
    
    return res.status(201).json(usuario);
});

app.get('/noticias', (req, res) => {
    return res.status(200).json([]);
});

app.post('/noticias', (req, res) => {
    return res.status(201).json([]);
});

app.listen(8080, () => {
    console.log('Servidor na funcionando na porta 8080');
});

