// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

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