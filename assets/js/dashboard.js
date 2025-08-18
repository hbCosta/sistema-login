function logout() {
    fetch('/auth/logout', { method: 'GET' })
        .then(() => {
            window.location.href = '/login';
        })
        .catch(error => {
            console.error('Erro no logout:', error);
            window.location.href = '/login'; 
        });
}

function carregarDadosUsuario(){
    fetch('/auth/usuario-atual')
        .then(response => response.json())
        .then(usuario =>{
            document.getElementById('nome-usuario').textContent = usuario.nome;
            document.getElementById('nome').value = usuario.nome;
            document.getElementById('nascimento').value = usuario.nascimento;
            document.getElementById('email').value = usuario.email;
        })
        .catch(error =>{
            console.error('Erro ao carregar dados do usuário:', error);
        });
}

document.addEventListener('DOMContentLoaded', carregarDadosUsuario);