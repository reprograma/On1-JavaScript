// Pegar o elemento que queremos (input)
// Ler o valor digitado no elemento
// Verificar se o valor é vazio 
// Se for vazio retornar uma mensagem de erro

const nome = document.querySelector("#cadastroInputNome");
const email = document.querySelector("#cadastroInputEmail");
const senha = document.querySelector("#cadastroInputPassword");
const confirmaSenha = document.querySelector("#cadastroInputPasswordConfirm");
const telefone = document.querySelector("#cadastroInputPhone");

const botao = document.querySelector('.cadastro__button');

botao.addEventListener('click',function(evento){
    evento.preventDefault();
    if (nome.value== undefined||
        nome.value== null||
        nome.value.trim()== ""||
        nome.value.length<0){
        nome.focus();
        alert("Preencha o campo nome corretamente")
        return false;

    }else if (email.value== undefined||
              email.value== null||
              email.value.trim()== ""||
              email.value.length<0){
              email.focus();
        alert("Preencha o campo email corretamente")
        return false;

    }else if (senha.value== undefined||
              senha.value== null||
              senha.value.trim()== ""||
              senha.value.length<6){
              senha.focus();
        alert("Preencha o campo de senha corretamente. No mínimo 6 caracteres")
        return false;

    }else if(senha.value !== confirmaSenha.value){
        confirmaSenha.focus();
        alert("A confirmação de senha não corresponde à senha informada")
        return false;
    }else if (telefone.value== undefined||
            telefone.value== null||
            telefone.value.trim()== ""||
            telefone.value.length<11){
            telefone.focus();
            alert("Preencha o campo de telefone corretamente.")
            return false;
    }
    document.querySelector('form').submit()
    alert('Cadastro realizado com sucesso!')
})


