// VAlIDAÇÃO DE CPF DIRETO PELO JAVA
// checar escutador
document.getElementById('cpfForm').addEventListener('submit', function(event){
event.preventDefault();

const cpf = document.getElementById('cpf').value;

const msg = document.getElementById('message');

if(validarCPF(cpf)){
    msg.textContent = 'O CPF é válido!';
    msg.style.color = 'green';

}else{
    msg.textContent = 'O CPF é invalido!';
    msg.style.color = 'red';
}
}
);

function validarCPF(cpf){
    cpf = cpf.replace(/[^\d]+/g, ''); //remove caracteres não numéricos

    // Estrutura de decisão para verificar quantidade de digitos e se todos os digitos são iguais
    if(cpf.length !==11 || /^(\d)\1{10}$/.test(cpf)){
    return false;
}

let soma = 0;
let resto;

for(let i=1;i <= 9;i++){
    soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
}
resto = (soma * 10) % 11;

if((resto === 10) || (resto === 11)){
    resto = 0;
}
if(resto !== parseInt(cpf.substring(9, 10))){
    return false;
}

soma = 0;
// Validando segundo digito verificador
for(let i = 1; i <= 10; i++){
    soma += parseInt(cpf.substring(i-1, i) * (12 - i));
}

resto = (soma * 10) % 11;

if((resto === 10) || (resto === 11)){
    resto = 0;
}
if(resto !== parseInt(cpf.substring(10, 11))){
    return false;
}

return true;
}