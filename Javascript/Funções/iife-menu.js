/* 
function ini (){
    let isValid = true
    console.log('init menu ', isValid)
}
ini() */

(function(win,doc){
    let isValid = true
    win.alert('ola mundo')
    console.log('init menu ', isValid)

    function ini(){
        console.log('init do menu')
    }
    ini()
})(window,document)