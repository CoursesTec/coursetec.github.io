// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export const firebaseConfig = {
  apiKey: "AIzaSyD-EXAMPLE",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
}; // Asegúrate de exportar firebaseConfig

// Inicializa Firebase solo una vez
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Manejar el login
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    // Redirige al dashboard si login fue exitoso
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    loginError.textContent = "Correo o contraseña incorrectos.";
  }
});
