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
// Lógica del formulario de registro
const registerForm = document.getElementById("register-form");
const registerError = document.getElementById("register-error");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = registerForm.email.value;
  const password = registerForm.password.value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
    window.location.href = "login.html"; // redirige después del popup
  } catch (error) {
    console.error("Error al registrar:", error);
    if (error.code === "auth/email-already-in-use") {
      registerError.textContent = "Este correo ya está registrado.";
    } else if (error.code === "auth/weak-password") {
      registerError.textContent = "La contraseña debe tener al menos 6 caracteres.";
    } else {
      registerError.textContent = "Error al registrar. Intenta nuevamente.";
    }
  }
});
