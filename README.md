# Sistema de Login

Um sistema simples de autenticação desenvolvido com Node.js, Express e MySQL.

## 📋 Descrição

Este projeto implementa um sistema básico de login e registro de usuários com interface web. 
Permite que usuários se cadastrem, façam login e acessem seu dashboard.

## 🚀 Tecnologias Utilizadas

- **Backend**: Node.js + Express.js
- **Banco de Dados**: MySQL
- **Frontend**: HTML, CSS, JavaScript
- **Outras**: dotenv

## 📁 Estrutura do Projeto

```
sistema-login/
├── assets/           # Arquivos estáticos (CSS, JS, imagens)
├── src/              # Código fonte do servidor
│   ├── config/       # Configurações (banco de dados)
│   ├── database/     # Queries do banco
│   └── routes/       # Rotas da aplicação
├── views/            # Páginas HTML
├── server.js         # Servidor principal
└── package.json      # Dependências do projeto
```

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd sistema-login
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com:
```
DB_HOST=localhost
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
PORT=3000
```

4. Configure o banco de dados MySQL

5. Execute o servidor:
```bash
node server.js
```

## 🌐 Rotas Disponíveis

- **GET /** - Página inicial
- **GET /login** - Página de login
- **GET /register** - Página de registro
- **GET /dashboard** - Área restrita (após login)
- **POST /auth/register** - Endpoint para registro
- **POST /auth/login** - Endpoint para autenticação

## ✨ Funcionalidades

- ✅ Registro de usuários
- ✅ Sistema de login
- ✅ Validação de email único
- ✅ Área restrita (dashboard)
- ✅ Conexão com banco MySQL

## 📝 Status do Projeto

- **Versão**: 1.0.0
- **Status**: Em desenvolvimento
- **Funcionalidades básicas**: Implementadas
- **Autenticação**: Implementada (básica)

## 🔧 Próximos Passos
- [ ] Interface responsiva 
- [ ] Implementar sessões de usuário
- [ ] Adicionar validação de senha
- [ ] Implementar logout
- [ ] Adicionar middleware de autenticação
- [ ] Melhorar segurança

## 📄 Licença

ISC

---

Desenvolvido com ❤️ usando Node.js e Express
