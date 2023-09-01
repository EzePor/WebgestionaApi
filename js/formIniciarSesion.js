import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { traducirError } from "./traduccionDeErrores.js";



const formIniciarSesion = document.getElementById('formIniciarSesion');// tomando referencia el formulario de registro

formIniciarSesion.addEventListener('submit',async (e)=>{
    e.preventDefault();
alert("Se está enviando el formulario de iniciar sesión")


const email = formIniciarSesion['txtEmail'].value; // tomamos la referencia del mail y password escrito
const password = formIniciarSesion['txtPassword'].value;
//console.log(email + " " + password);

try {
    const usuario = await signInWithEmailAndPassword (auth, email, password);
    // imprimimos, a manera de control, el usuario que se creo
    console.log(usuario)

    // tomamos la referencia de la ventna modal
    const ventanaIniciarSesion = document.getElementById('inicarSesionModal');

    
    const modal = bootstrap.Modal.getInstance(ventanaIniciarSesion);
    modal.hide();// ocultamos la ventana con el metodo hide de bootstrap
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
});