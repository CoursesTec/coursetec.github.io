import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Tu configuración de Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyDUMTm5ksASiDCOHE0nyjMJ_d9eaOZOsHw",
  authDomain: "coursetech-3403b.firebaseapp.com",
  projectId: "coursetech-3403b",
  storageBucket: "coursetech-3403b.firebasestorage.app",
  messagingSenderId: "184929937348",
  appId: "1:184929937348:web:ddd5ef53f642bf2c36a691",
  measurementId: "G-8JNDG6MDN7"
};

// Inicializa Firebase solo si lo necesitas aquí
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);