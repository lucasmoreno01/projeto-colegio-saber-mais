
let imagem = document.querySelectorAll('.slide')
let tempo = 3000;
let imageIndex = 0;
let max = imagem.length;


function proxImagem() {
    imagem[imageIndex].classList.remove("selected")
    imageIndex++

    if(imageIndex  >= max)
    imageIndex = 0

   imagem[imageIndex].classList.add("selected")
}

function start() {
    setInterval(() => {
        proxImagem()   
    }, tempo)
}

window.addEventListener('load', start);

const butonMobile = document.querySelector('#menu-mobile')

function menuMobile() {
    const navMobile = document.querySelector('#nav')
    const exitMenu = document.querySelector('#menu-mobile')
    navMobile.classList.toggle('active')
    exitMenu.classList.toggle('active')
}
butonMobile.addEventListener('click', menuMobile)



