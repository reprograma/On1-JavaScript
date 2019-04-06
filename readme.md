 # JavaScript 
## Reprograma Online T1 
Aula 06/04/2019 |  9h às 17h
---
## Objetivo:
Entender os príncípios básicos da linguagem JavaScript necessários para manipular o DOM.
---
## Recursos necessários:
- Navegador Chrome
- Visual Studio Code
---
## Pra que serve o JavaScript?  
- Para adicionar, modificar e remover elementos, atributos e estilos do documento HTML

- Para realizar ações a partir de eventos, podendo também adicionar eventos e modificá-los

- Resumindo: para dar vida à sua página!

## Entendendo os objetos
Objetos são coleções de dados e/ou funcionalidades relacionadas, que são  respectivamente chamadas de propriedades e métodos.

Representação de um objeto:
``` javascript 
var objeto = {
    propriedade1:'valor da propriedade1',
    propriedade2:'valor da propriedade2',
    metodo: function(){ função dentro de objeto se chama método}
}
```
Exemplo:

```javascript
var pessoa = {
    nome: 'Poderosa',
    idade: 26,
    sexo: 'feminino',
    saudacao: function() {alert('Oi! Eu sou ' + this.nome + '.');
    }
};
```

## O que é o DOM?

- DOM é uma sigla que significa **D**ocument **O**bject **M**odel.

- Quando a página é carregada o browser cria um objeto que representa os elementos da página a partir do HTML.

- A forma mais fácil de acessar e manipular o DOM é usando JavaScript

- Componentes: 
  - Document - representa o documento HTML 
  - Elements - são todas as tags que estão no arquivo HTML e se transformam em elementos da árvore DOM
  - Texts - é o conteúdo de texto que vai entre os elementos (tags).
  - Attributes - são os todos atributos para um nó específico. No caso, o attribute class="HERO" está associado ao elemento `<p>`, outros exemplos de atributos são o href, o id, entre outros.


## Métodos para manipular o DOM

`getElementById()`- Retorna o elemento que estiver contendo o nome do ID passado. Como os IDs devem ser únicos, é um método muito útil para pegar apenas o elemento desejado.

`getElementsByClassName()` - Retorna uma coleção de todos elementos que estiverem contendo o nome da classe passada.

`getElementsByTagName()`- uma coleção de todos elementos que contennham a tag name passada.

`querySelector()` - Retorna o primeiro elemento que possui o seletor CSS passado (usa mesma sintaxe do CSS) Exemplo: querySelector('.classe'), querySelector('#id') e querySelector('tag')

`querySelectorAll()` - semelhante ao querySelector(), só que retorna todos os elementos que se equiparam ao seletor
>Exercício: DOM

## Revisando Funções 

Funções são blocos de código contendo uma ou mais instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar.

Representação de uma função:
``` javascript 
function nomeFuncao(){
    Instruções
}
```

## Escutando eventos

Com JS é possível criar interatividades com os elementos da página, para isso nós podemos adicionar um escutador de eventos. 

Exemplo de evento de click (quando o usuário clica em um elemento):
```javascript
  elemento.addEventListener('click', function(event) {
      //Descreva aqui o que você quer que a função execute quando o evento for acionado
  }
```
Os dois principais parâmetros do addEventListener() são:
- O tipo de evento que você deseja 
- A função de callback
>Exercício: DOM (+ Botão)


## Manipulando estilo e classes
`className` - acessa a propriedade de classe e atribui o valor que foi passado
`classList` - acessa a lista de classes de um elemento
`classList.contains()` - verifica se elemento contem a classe passada
`classList.remove()` - remove a classe do elemento selecionado
`classList.add()` - adiciona a classe no elemento selecionado
>Exercício: Menu e Modal


## Criação de elementos no HTML

`createElement` - cria um elemento HTML
`createTextNode` - criar um nó de texto para o elemento
`appendChild` - adiciona elemento como 'filho' de um elemento 'pai'
`insertBefore`- insere elemento antes de um determinado elemento
>Ex: Lista de gastos


## Validando valores de inputs
Coletar valores de inputs 

Verificar se atendem aos critérios

Devolver mensagem de erro ao usuário (ao submeter/atualizar)

>Ex: Cadastro