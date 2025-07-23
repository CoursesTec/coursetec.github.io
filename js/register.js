// Import the functions you need from the SDKs you need
import { app } from "./firebase-config.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

// Lógica del formulario de registro
const registerForm = document.getElementById("register-form");
const registerError = document.getElementById("register-error");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = registerForm.email.value;
  const password = registerForm.password.value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    registerError.style.color = "#388e3c";
    registerError.textContent = "¡Registro exitoso! Ahora puedes iniciar sesión.";
    setTimeout(() => window.location.href = "login.html", 1500);
  } catch (error) {
    registerError.style.color = "#d32f2f";
    if (error.code === "auth/email-already-in-use") {
      registerError.textContent = "Este correo ya está registrado. Inicia sesión.";
    } else if (error.code === "auth/weak-password") {
      registerError.textContent = "La contraseña debe tener al menos 6 caracteres.";
    } else if (error.code === "auth/invalid-email") {
      registerError.textContent = "Correo electrónico no válido.";
    } else {
      registerError.textContent = "Error al registrar usuario.";
    }
  }
});

<script type="module" src="js/register.js"></script>
