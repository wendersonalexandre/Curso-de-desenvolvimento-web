(function(){
     
    const nomeUsuario = 'Wenderson Alexandre'  ;
    if (nomeUsuario){
        const topBarElemento = document.createElement("div")
        topBarElemento.className = "top-bar"
        topBarElemento.innerHTML = `<p>Olá,<strong>${nomeUsuario}</strong> </p>`

         const paielemento = document.querySelector('.hero')
         paielemento.insertBefore(topBarElemento,paielemento.firstElementChild)
         
    } 

})()