
const pool = require('../config/connection'); // Importa a conexão com o bacno de dados

const insertUser = async (nome, nascimento, email, senha) => {
    const query = 'INSERT INTO users (nome, email, senha, data_de_nascimento) VALUES (?, ?, ?, ?)';
    const values = [nome, email, senha, nascimento];

    try{
        const [resulto] = await pool.execute(query, values);
        return {success: true, userId: resulto.insertId};
    }catch(error){
        throw error;
    }
};

const buscarUsuarioPorEmail = async (email) =>{
    const query= 'SELECT * FROM users WHERE email = ?';
    const values = [email];
    try{
        const [resultado] = await pool.execute(query, values);
        return resultado[0];
    }catch(error){
        throw error;
    }
};

const buscarId = async (id) =>{
    const query = 'SELECT * FROM users WHERE id = ?';
    const values = [id];
    try{
        const [resultado] = await pool.execute(query, values);
        return resultado[0];
    }catch(error){
        throw error;
    }
};

const atualizarUsuario = async (id, nome, nascimento, email) => {
    const query = 'UPDATE users SET nome = ?, data_de_nascimento = ?, email = ? WHERE id = ?';
    const values = [nome, nascimento, email, id];
    try{
        const [resultado] = await pool.execute(query, values);
        return {success: true, rowsAffected: resultado.affectedRows};
    }catch(error){
        throw error;
    }
}

module.exports = {
    insertUser,
    buscarUsuarioPorEmail,
    buscarId,
    atualizarUsuario    
};
