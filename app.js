
//PERSONALIZADO-----------------------------------------------
// Importa las funciones que necesitas del SDK de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBK6EQwPdOH3-njXqb7vx_5A-nPbI6GG5c",
    authDomain: "datacloud-9d1cc.firebaseapp.com",
    projectId: "datacloud-9d1cc",
    storageBucket: "datacloud-9d1cc.appspot.com",
    messagingSenderId: "58957794387",
    appId: "1:58957794387:web:b2d4fdd4eafb41fc484aa6",
    measurementId: "G-5RNJ60TL74"
};
//fin de codigo personalizado-------------------------------------

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Conexióna a firebase establecida correctamente");

document.getElementById('student-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const boleta = document.getElementById('boleta').value;
    const edad = document.getElementById('edad').value;
    const semestre = document.getElementById('semestre').value;
    const carrera = document.getElementById('carrera').value;

    try {
        await addDoc(collection(db, "students"), {
            name: name,
            boleta: boleta,
            edad: edad,
            semestre: semestre,
            carrera: carrera
        });
        document.getElementById('status').innerText = "Datos guardados correctamente";
    } catch (error) {
        console.error("Error al guardar los datos: ", error);
    }
});
