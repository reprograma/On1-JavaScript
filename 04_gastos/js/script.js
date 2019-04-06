const botao = document.querySelector('.button');

botao.addEventListener('click', function(evento){
    evento.preventDefault()
    // const valores = document.querySelectorAll('.transacao__input');// Array de elementos
    // const nome = valores[0].value

    const nome = document.querySelector('#transacaoInputName')
    const money = document.querySelector('#transacaoInputMoney')
    const date = document.querySelector('#transacaoInputDate')
    
    // //Linha
    // const linha = document.createElement('tr');
    
    // // Coluna 1
    // const colunaNome = document.createElement('td');
    // colunaNome.textContent = nome.value;
    // linha.appendChild(colunaNome);
    
    // // Coluna 2
    // const colunaMoney = document.createElement('td');
    // colunaMoney.textContent = money.value;
    // linha.appendChild(colunaMoney);

    // // Coluna 3
    // const colunaDate = document.createElement('td');
    // colunaDate.textContent = date.value;
    // linha.appendChild(colunaDate);

    // //Inserindo a linha no DOM (corpo da tabela - sua maezinha)
    // const tabela = document.querySelector('.extrato__body')
    // tabela.appendChild(linha);

    const tabela = document.querySelector('.extrato__body')
    tabela.innerHTML +=`
    <tr> 
        <td>${nome.value}</td>
        <td>${money.value}</td>
        <td>${date.value}</td> 
    </tr>` //template string

})

// <tr> <td> nome  </td> <td> valor  </td> <td>data</td> </tr>