document.addEventListener('DOMContentLoaded', () => {
    const senhaInput = document.getElementById('password');
    const form = document.getElementById('form');

    senhaInput.addEventListener('input', ()=>{
        const senha = senhaInput.value;
        const isValid = validator.isStrongPassword(senha, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        });
        if(isValid){
            senhaInput.classList.remove('invalid');
            senhaInput.classList.add('valid');
        }else{
            senhaInput.classList.remove('valid');
            senhaInput.classList.add('invalid');
        }
    })


    form.addEventListener('submit', (e) => {
        const senha = senhaInput.value;
        if(!validator.isStrongPassword(senha, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        })){
            e.preventDefault();
            alert('A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, um número e um caractere especial');
        }
    })
});



