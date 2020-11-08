var btnMudarCor = document.querySelector('button');
var corpo = document.querySelector('body')
var corFundo = '#1e1e1e'

corpo.style.backgroundColor = corFundo
btnMudarCor.addEventListener('click', mudarBg)

contador = 0

function mudarBg() {
    
    if (contador == 0) {
        corpo.style.backgroundColor = '#950740'
        contador++ 
    } else if (contador == 1) {
        corpo.style.backgroundColor = '#2286b0'
        contador++ 
    } else if (contador == 2) {
        corpo.style.backgroundColor = '#2aa392'
        contador++
    } else if (contador == 3) {
        corpo.style.backgroundColor = "#e3a544"
        contador++
    } else {
        corpo.style.backgroundColor = corFundo
        contador = 0
    }    
}




