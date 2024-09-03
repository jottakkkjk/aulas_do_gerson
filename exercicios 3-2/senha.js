function verificarSenha(senha) {

    const comprimentoMinimo = 8;
    const temLetraMaiuscula = /[A-Z]/.test(senha);
    const temLetraMinuscula = /[a-z]/.test(senha);
    const temDigito = /\d/.test(senha);
    const temCaractereEspecial = /[@#$%&*!]/.test(senha);

 
    if (
        senha.length >= comprimentoMinimo &&
        temLetraMaiuscula &&
        temLetraMinuscula &&
        temDigito &&
        temCaractereEspecial
    ) {
        console.log('Senha forte!');
    } else {
    
        let mensagem = 'Senha fraca. A senha deve atender a todos os seguintes critérios:';
        if (senha.length < comprimentoMinimo) {
            mensagem += ' pelo menos 8 caracteres,';
        }
        if (!temLetraMaiuscula) {
            mensagem += ' uma letra maiúscula,';
        }
        if (!temLetraMinuscula) {
            mensagem += ' uma letra minúscula,';
        }
        if (!temDigito) {
            mensagem += ' um número,';
        }
        if (!temCaractereEspecial) {
            mensagem += ' um caractere especial (@, #, $, %, etc.),';
        }
     
        mensagem = mensagem.replace(/,\s*$/, '.');
        console.log(mensagem);
    }
}


verificarSenha('Astolfo@123'); 
verificarSenha('cleiton123');  
verificarSenha('JAGUNCIO@');    
verificarSenha('Elisio3');  