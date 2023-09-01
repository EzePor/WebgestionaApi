import { auth } from "./firebase.js";
import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { traducirError } from "./traduccionDeErrores.js";




const btnGitHub = document.getElementById('btnLoginGitHub');

btnGitHub.addEventListener('click', async (e) => {
    const provider = new GithubAuthProvider();
    try {
        const credencialesUsuario = await signInWithPopup (auth,provider);
        // imprimimos, a manera de control, el usuario que se creo
        console.log('Credencias de usuario', credencialesUsuario);

        // tomamos la referencia de la ventna modal
        
        const ventanaIniciarSesion =document.getElementById('iniciarSesionModal');
        const modal= bootstrap.Modal.getInstance(ventanaIniciarSesion);
         modal.hide();
      // lo mismo que abajo distinta sintaxis



         alert(`Bienvenido ${credencialesUsuario.user.displayName}`)
    // ocultamos la ventana con el metodo hide de bootstrap
    } catch(error){
        // si ocurre un error se imprime su código por consola
        console.log(error.code);
        // y se muestra el error con la librería Tostify en formato de toast(tostada: cartelito que se ve en la parte inferior algunos segundo)

        Toastify({
            text: traducirError(error.code),
            duration: 3000,
            gravity: 'bottom',
            position:'right',
            style: {background: '#ff4136'}
            }).showToast();

        console.log(error);

    }

})

