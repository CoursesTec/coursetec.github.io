  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyClho1fMhu5lsqKwLijOcm0Db5OzuuqsxU",
    authDomain: "coursetec-827ac.firebaseapp.com",
    projectId: "coursetec-827ac",
    storageBucket: "coursetec-827ac.firebasestorage.app",
    messagingSenderId: "338590949563",
    appId: "1:338590949563:web:f5653a24f96316f9f6099e",
    measurementId: "G-B7Q1RRCVN0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  const submitButton = document.getElementById("submit-button");
  submitButton .addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent the default form submission
    //input elements
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    //sumit button
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("User registered successfully!");
      // ...
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
      // ..
      });
  }
  );