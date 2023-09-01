const elementosConectados = document.querySelectorAll('.conectado');
const elementosDesconectados = document.querySelectorAll('.desconectado');

//console.log(elementosConectados);
//console.log(elementosDesconectados);

export const loginCheck = (user) =>{
    if (user){
        if(user.emailVerified){
            elementosConectados.forEach (elemento=>elemento.style.display='block');
            elementosDesconectados.forEach (elemento=>elemento.style.display='none');
        }else{
            Toastify({
                    text: "Debe verificar su email",
                    duration: 3000,
                    gravity: 'bottom',
                    position:'right',
                    style: {background: '#ff4136'}
                }).showToast();
            }

        }else{  
            elementosConectados.forEach (elemento=>elemento.style.display='none');
            elementosDesconectados.forEach (elemento=>elemento.style.display='block');
        }
    }



