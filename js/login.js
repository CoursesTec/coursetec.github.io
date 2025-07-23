import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const errorContainer = document.getElementById("login-error");

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorContainer.textContent = ""; // Limpiar mensajes previos

    const email = loginForm["email"].value.trim();
    const password = loginForm["password"].value.trim();

    if (!email || !password) {
      errorContainer.textContent = "Por favor, completa todos los campos.";
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Redirige si todo salió bien
      window.location.href = "dashboard.html";
    } catch (error) {
      let message = "Ocurrió un error al iniciar sesión.";

      switch (error.code) {
        case "auth/user-not-found":
          message = "No se encontró una cuenta con este correo.";
          break;
        case "auth/wrong-password":
          message = "La contraseña es incorrecta.";
          break;
        case "auth/invalid-email":
          message = "El correo ingresado no es válido.";
          break;
        case "auth/too-many-requests":
          message = "Demasiados intentos fallidos. Intenta más tarde.";
          break;
      }

      errorContainer.textContent = message;
    }
  });
});
