document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const errorAlert = document.getElementById('errorAlert');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = {
            email: formData.get('email'),
            senha: formData.get('senha'),
        };
        try{
            const response = await fetch('/auth/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if(response.ok){
                window.location.href = '/dashboard';
            }else{
                //Mostra um alerta
                errorAlert.textContent = result.error;
                errorAlert.style.display = 'block';

                //Esconde o alerta após 5 segundos
                setTimeout(() => {
                    errorAlert.style.display = 'none';
                }, 5000);
            }
        }catch(error){
            console.error('Erro ao fazer login:', error);
            errorAlert.textContent = 'Erro ao fazer login. Por favor, tente novamente.';
            errorAlert.style.display = 'block';
        }
    });
});