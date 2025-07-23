// js/dashboard.js
import { auth, db } from "./firebase-config.js";
import {
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Simulamos los cursos disponibles
const cursosDisponibles = [
  { id: "curso1", titulo: "Herramientas de Google", descripcion: "Drive, Docs, Classroom", video: "https://www.youtube.com/embed/xT3m-XwA06g" },
  { id: "curso2", titulo: "Edición de Video", descripcion: "CapCut, Clipchamp, OBS Studio", video: "https://www.youtube.com/embed/yvF_QnP3nQc" },
  { id: "curso3", titulo: "Diseño básico", descripcion: "Canva, Genially, Piktochart", video: "https://www.youtube.com/embed/DO1Q7FzkmYM" },
];

const contenedor = document.getElementById("cursos");

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const progresoDoc = await getDoc(doc(db, "progreso", user.uid));
  let progreso = progresoDoc.exists() ? progresoDoc.data() : {};

  cursosDisponibles.forEach((curso) => {
    const estado = progreso[curso.id]?.completado ? "✅ Completado" : "⏳ En progreso";

    const div = document.createElement("div");
    div.className = "curso";
    div.innerHTML = `
      <h3>${curso.titulo}</h3>
      <p>${curso.descripcion}</p>
      <iframe width="300" height="170" src="${curso.video}" frameborder="0" allowfullscreen></iframe>
      <p><strong>${estado}</strong></p>
      <button onclick="window.location.href='curso.html?id=${curso.id}'">Ir al curso</button>
    `;
    contenedor.appendChild(div);
  });
});

document.getElementById("logout").addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
});
