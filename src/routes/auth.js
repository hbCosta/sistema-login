
const express = require('express');
const router = express.Router();
const path = require('path');
const{insertUser} = require('../database/userQueries');

router.post('/register', async(req, res)=>{
    try{
        const{nome, nascimento, email, senha} = req.body;
        const result = await insertUser(nome, nascimento, email, senha);
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

module.exports = router;

