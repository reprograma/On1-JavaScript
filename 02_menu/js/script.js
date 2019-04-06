let botao = document.querySelector('.sidebar-menu__button')

let lista = document.querySelector('.sidebar-menu')

console.log('Meu valor de left inicial é',lista.style.left )
botao.addEventListener('click',function(){
    if (lista.style.left==='-430px'){ //Se estiver escondida
        lista.style.left = 0; //Mostro a lista
        console.log('Meu valor de left mostrando é ',lista.style.left )
    } else{
        lista.style.left = '-430px'; // Escondo a lista
        console.log('Meu valor de left escondido é ',lista.style.left )
    }
})
