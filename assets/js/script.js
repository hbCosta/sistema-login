
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    if(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            // Validar campos
            const email = document.getElementById('email');
            const password = document.getElementById('password');

            if(email.value === '' || password.value === ''){
                alert('Por favor, preencha todos os campos');
                return;
            }
            
            // Se tudo estiver válido, enviar o formulário
            form.submit();
        });
    }   
});