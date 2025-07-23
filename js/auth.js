// js/auth.js
import { auth, db } from './firebase-config.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const form = document.getElementById("login-form");
const registrar = document.getElementById("registrar");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "dashboard.html";
  } catch (error) {
    alert("Error al iniciar sesión");
  }
});

registrar.addEventListener("click", async () => {
  const email = prompt("Correo:");
  const password = prompt("Contraseña:");

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Registrado correctamente. Inicia sesión.");
  } catch (error) {
    alert("Error al registrar usuario");
  }
});
