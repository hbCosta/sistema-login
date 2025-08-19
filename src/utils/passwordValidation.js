
const validarSenha = (senha)=>{
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(senha);
    const hasLowercase = /[a-z]/.test(senha);
    const hasNumber = /[0-9]/.test(senha);
    const hasSpecialChar = /[!@#$%^&*]/.test(senha);
    
    if(senha.length < minLength){
        return {valida: false, erro: 'A senha deve ter pelo menos 8 caracteres'};
    }
    if(!hasUppercase){
        return {valida: false, erro: 'A senha deve ter pelo menos uma letra maiúscula'};
    }
    if(!hasLowercase){
        return {valida: false, erro: 'A senha deve ter pelo menos uma letra minúscula'};
    }
    if(!hasNumber){
        return {valida: false, erro: 'A senha deve ter pelo menos um número'};
    }
    if(!hasSpecialChar){
        return {valida: false, erro: 'A senha deve ter pelo menos um caractere especial'};
    }
    return {valida: true};
}

module.exports = { 
    validarSenha,
}