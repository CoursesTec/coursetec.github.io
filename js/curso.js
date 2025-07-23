// js/curso.js
import { auth, db } from "./firebase-config.js";
import {
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Extrae el ID del curso desde la URL
const urlParams = new URLSearchParams(window.location.search);
const cursoID = urlParams.get("id");

const cursosData = {
  curso1: {
    titulo: "Herramientas de Google",
    video: "https://www.youtube.com/embed/xT3m-XwA06g",
    tarea: "Investiga cómo crear una clase en Google Classroom.",
  },
  curso2: {
    titulo: "Edición de Video",
    video: "https://www.youtube.com/embed/yvF_QnP3nQc",
    tarea: "Crea un video educativo usando CapCut o Clipchamp.",
  },
  curso3: {
    titulo: "Diseño básico",
    video: "https://www.youtube.com/embed/DO1Q7FzkmYM",
    tarea: "Diseña un cartel educativo en Canva.",
  }
};

const curso = cursosData[cursoID];
document.getElementById("titulo-curso").textContent = curso?.titulo || "Curso";
document.getElementById("contenido-curso").innerHTML = `
  <iframe width="560" height="315" src="${curso.video}" frameborder="0" allowfullscreen></iframe>
  <p><strong>Tarea:</strong> ${curso.tarea}</p>
`;

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  document.getElementById("completar-btn").addEventListener("click", async () => {
    const progresoRef = doc(db, "progreso", user.uid);
    const progresoSnap = await getDoc(progresoRef);
    let progresoActual = progresoSnap.exists() ? progresoSnap.data() : {};

    progresoActual[cursoID] = { completado: true };

    await setDoc(progresoRef, progresoActual);
    alert("¡Curso marcado como completado!");
    window.location.href = "dashboard.html";
  });
});
