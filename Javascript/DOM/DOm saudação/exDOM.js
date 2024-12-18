(function(){
    const nomeUsuario = null  ;
    const elemento = document.querySelector('.top-bar p');
    if (nomeUsuario){
       // document.querySelector('.top-bar p').textContent = "Bem-Vindo(a)," + nomeUsuario
        console.log(elemento.textContent)
       // elemento.textContent = elemento.textContent + nomeUsuario
        elemento.innerHTML += "<Strong>" + nomeUsuario + "</Strong>"
    } else {
        // elemento.parentElement.style.display = "none"
       // elemento.remove( )
       const elementoParaRemover = elemento.parentElement
       elementoParaRemover.parentElement.removeChild(elementoParaRemover)

    }
    console.log(elemento)
})()