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
            console.log('Dados recebidos:', usuario); // ← Adicione esta linha

            document.getElementById('nome-usuario').textContent = usuario.nome;
            document.getElementById('nome').value = usuario.nome;
            if(usuario.nascimento){
                const data = new Date(usuario.nascimento);
                const dataFormatada = data.toISOString().split('T')[0];
                document.getElementById('nascimento').value = dataFormatada;
            }
            document.getElementById('email').value = usuario.email;
        })
        .catch(error =>{
            console.error('Erro ao carregar dados do usuário:', error);
        });
}

function editar(){
    document.getElementById('nome').disabled = false;
    document.getElementById('nascimento').disabled = false;
    document.getElementById('email').disabled = false;
    document.getElementById('btn-editar').style.display = 'none';
    document.getElementById('btn-salvar').style.display = 'block';
}

function salvar(){
    const nome = document.getElementById('nome').value;
    const nascimento = document.getElementById('nascimento').value;
    const email = document.getElementById('email').value;

    if(!nome || !nascimento || !email){
        alert('Por favor, preencha todos os campos');
        return;
    }

    // Desabilita os campos
    document.getElementById('nome').disabled = true;
    document.getElementById('nascimento').disabled = true;
    document.getElementById('email').disabled = true;

    // Mostrar/Esconder os botões
    document.getElementById('btn-editar').style.display = 'block';
    document.getElementById('btn-salvar').style.display = 'none';

    fetch('/auth/atualizar-usuario', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({nome, nascimento, email}),
    })
    .then(response => response.json())
    .then(data =>{
        if(data.success){
            alert('Usuário atualizado com sucesso');
            document.getElementById('nome-usuario').textContent = nome;
            document.getElementById('nome').value = nome;
            document.getElementById('nascimento').value = nascimento;
            document.getElementById('email').value = email;
        }else{
            alert('Erro ao atualizar usuário' + data.error);
        }
    })
    .catch(error =>{
        console.error('Erro ao salvar', error);
        alert('Erro ao salvar dados');
    });
}

function cancelar(){
    document.getElementById('nome').disabled = true;
    document.getElementById('nascimento').disabled = true;
    document.getElementById('email').disabled = true;

    document.getElementById('btn-editar').style.display = 'block';
    document.getElementById('btn-salvar').style.display = 'none';   
}

document.addEventListener('DOMContentLoaded', carregarDadosUsuario);