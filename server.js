require('dotenv').config(); // Carrega as variáveis de ambiente

const express = require('express'); // Importa o express
const path = require('path'); // Importa o path
const authRoutes = require('./src/routes/auth'); // Importa as rotas de autenticação

const app = express(); // Cria uma instância do express
const PORT = process.env.PORT || 3000; // Define a porta do servidor

app.use(express.json()); // Middleware para lidar com JSON
app.use(express.urlencoded({ extended: true })); // Middleware para lidar com formulários

app.use('/auth', authRoutes); // Usa as rotas de autenticação

// Rota para a página inicial
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
}); 

// Rota para a página de login
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Rota para a página de registro
app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

// Rota para a página de perfil
app.get('/dashboard', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

// Inicia o servidor
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});

