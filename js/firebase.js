// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { loginCheck } from "./loginCheck.js";
 



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJu02w6o9rVt0aau1BjkQMsWyh_sgnRa4",
  authDomain: "fir-autenticacion-dc174.firebaseapp.com",
  projectId: "fir-autenticacion-dc174",
  storageBucket: "fir-autenticacion-dc174.appspot.com",
  messagingSenderId: "225409810571",
  appId: "1:225409810571:web:16b4f17b4cab28f2ee548e",
  measurementId: "G-N8V7XBETSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

console.log(auth);

console.log(app);

onAuthStateChanged(auth, async (user)=> {
  console.log('Hubo un cambio de estado en el login');
  console.log(user);
  loginCheck(user);
})