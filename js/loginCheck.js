const elementosConectados = document.querySelectorAll('.conectado');
const elementosDesconectados = document.querySelectorAll('.desconectado');

//console.log(elementosConectados);
//console.log(elementosDesconectados);

export const loginCheck = (user) => {
    if (user){
        elementosConectados.forEach (elemento=>elemento.style.display='block');
        elementosDesconectados.forEach (elemento=>elemento.style.display='none');
    }else{
        elementosConectados.forEach (elemento=>elemento.style.display='none');
        elementosDesconectados.forEach (elemento=>elemento.style.display='block');
    }

}
