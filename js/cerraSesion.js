import { auth } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";



const cerrarSesion = document.getElementById('cerrarSesionMenu');

cerrarSesion.addEventListener('click', ()=>{
    signOut(auth);

    //alert ('se hizo click en el menú');
})