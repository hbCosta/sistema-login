
const pool = require('../config/connection'); // Importa a conexão com o bacno de dados

const insertUser = async (nome, nascimento, email, senha) =>{
    const query = 'INSERT INTO users (nome, email, senha, data_de_nascimento) VALUES (?, ?, ?, ?)';
    const values = [nome, email, senha, nascimento];

    try{
        const [resulto] = await pool.execute(query, values);
        return {success: true, userId: resulto.insertId};
    }catch(error){
        throw error;
    }
};

module.exports = {insertUser};
