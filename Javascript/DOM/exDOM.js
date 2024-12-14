(function(){
    const nomeUsuario = "Wenderson Alexandre"
    /* document.querySelector(".top-bar").textContent = `Bem-Vindo ${nomeUsuario}` */
    const elemento = document.querySelector('.top-bar p')
    elemento.textContent +=  nomeUsuario
})()