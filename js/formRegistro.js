import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { traducirError } from "./traduccionDeErrores.js";



const formRegistro = document.getElementById('formRegistro'); // tomando referencia el formulario de registro
//console.log(formRegistro);

// agregamos la escucha  del evento submit y una función flecha que queremos que se ejecute cuando ocurra ese evento
formRegistro.addEventListener('submit',async (e)=>{
    e.preventDefault(); // detenemos el envio
    const email = formRegistro['txtEmails'].value; // tomamos la referencia del mail y password escrito
    const password = formRegistro['txtPasswords'].value;
    //console.log(email + " " + password);
    try {
        const usuario = await createUserWithEmailAndPassword (auth, email, password);
        // imprimimos, a manera de control, el usuario que se creo
        console.log(usuario)

        // tomamos la referencia de la ventna modal
        const ventanaRegistro = document.getElementById('registrarseModal');
        const modal = bootstrap.Modal.getInstance(ventanaRegistro);
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
})