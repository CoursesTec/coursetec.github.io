// Import the functions you need from the SDKs you need
import { app } from "./firebase-config.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
    loginError.style.color = "#388e3c";
    loginError.textContent = "¡Inicio de sesión exitoso!";
    setTimeout(() => (window.location.href = "dashboard.html"), 1200);
  } catch (error) {
    loginError.style.color = "#d32f2f";
    if (error.code === "auth/user-not-found") {
      loginError.textContent = "Usuario no registrado. Regístrate primero.";
    } else if (error.code === "auth/wrong-password") {
      loginError.textContent = "Contraseña incorrecta.";
    } else if (error.code === "auth/invalid-email") {
      loginError.textContent = "Correo electrónico no válido.";
    } else {
      loginError.textContent = "Error al iniciar sesión.";
    }
  }
});
