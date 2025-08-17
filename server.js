require('dotenv').config();
const express = require('express');
const pool = require('./src/config/connection');

const app = express();

// Teste de conexão ao iniciar o servidor
pool.getConnection()
    .then(connection => {
        console.log('✅ Banco conectado - Servidor iniciando...');
        connection.release();
        
        app.listen(3000, () => {
            console.log('🚀 Servidor rodando na porta 3000');
        });
    })
    .catch(err => {
        console.error('❌ Falha na conexão com banco:', err.message);
        process.exit(1);
    });