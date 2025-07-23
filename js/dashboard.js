// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUMTm5ksASiDCOHE0nyjMJ_d9eaOZOsHw",
  authDomain: "coursetech-3403b.firebaseapp.com",
  projectId: "coursetech-3403b",
  storageBucket: "coursetech-3403b.firebasestorage.app",
  messagingSenderId: "184929937348",
  appId: "1:184929937348:web:ddd5ef53f642bf2c36a691",
  measurementId: "G-8JNDG6MDN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Referencias a elementos del DOM
const userNameEl = document.getElementById("user-name");
const coursesContainer = document.getElementById("courses-container");
const logoutBtn = document.getElementById("logout-btn");

// Datos simulados de cursos
const cursos = [
  { titulo: "Google Drive Básico", progreso: 40 },
  { titulo: "Google Classroom para Primaria", progreso: 70 },
  { titulo: "PowerPoint para Docentes", progreso: 25 },
  { titulo: "Canva para Material Didáctico", progreso: 80 }
];

// Función para renderizar los cursos
function renderCursos() {
  coursesContainer.innerHTML = "";
  cursos.forEach(curso => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <h2>${curso.titulo}</h2>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${curso.progreso}%;"></div>
      </div>
      <a class="btn-ir" href="#">Ir al curso</a>
    `;
    coursesContainer.appendChild(card);
  });
}

// Verificar si el usuario está autenticado
onAuthStateChanged(auth, user => {
  if (user) {
    userNameEl.textContent = `Bienvenido/a, ${user.email}`;
    renderCursos();
  } else {
    window.location.href = "login.html";
  }
});

// Cerrar sesión
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.location.href = "login.html";
    })
    .catch(error => {
      console.error("Error al cerrar sesión:", error);
    });
});
