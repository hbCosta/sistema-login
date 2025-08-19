
const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcrypt'); // Importa o bcrypt
const{insertUser, buscarUsuarioPorEmail, buscarId} = require('../database/userQueries');
const {validarSenha} = require('../utils/passwordValidation');

router.post('/register', async(req, res)=>{
    try{
        const{nome, nascimento, email, senha} = req.body;

        const validacaoSenha = validarSenha(senha);
        if(!validacaoSenha.valida){
            return res.status(400).json({error: validacaoSenha.erro});
        }
        const saltRounds = 10; // Define o número de rounds para a hash
        const senhaHash = await bcrypt.hash(senha, saltRounds); // Gera a hash da senha

        const result = await insertUser(nome, nascimento, email, senhaHash);
        console.log('Usuário registrado com sucesso');
        res.redirect('/login');
    }catch(error){
        console.error('Erro ao inserir usuário:', error);
        if(error.code === 'ER_DUP_ENTRY' && error.message.includes('email')){
            return res.status(400).json({error: 'Email já está cadastrado'});
        }
        res.status(500).json({error: 'Erro ao registrar usuário'});
    }
});

router.post('/login', async(req, res)=>{
    try{
        const{email, senha} = req.body;
        console.log('Tentativa de login:', email);
        const usuario = await buscarUsuarioPorEmail(email);
        if(!usuario){
            return res.status(401).json({error: 'Email inválido'});
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if(!senhaValida){
            return res.status(401).json({error: 'Senha inválida'});
        }

        req.session.usuarioId = usuario.id; 
        console.log('Login realizado com sucesso');
        res.json({success:true});
    }catch(error){
        console.error('Erro ao fazer login:', error);
        res.status(500).json({error: 'Erro ao fazer login'});
    }
});

router.get('/usuario-atual', async(req, res) =>{
    try{
        const usuarioId = req.session.usuarioId; 
        const usuario = await buscarId(usuarioId); 
        res.json({
            nome: usuario.nome,
            nascimento: usuario.data_de_nascimento, 
            email: usuario.email
        })
    }catch(error){
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({error: 'Erro ao buscar usuário'});
    }
});

router.get('/logout', (req, res) =>{
    req.session.destroy(); 
    res.redirect('/login');
});


module.exports = router;
