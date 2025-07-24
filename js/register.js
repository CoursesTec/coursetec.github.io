  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
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
  const analytics = getAnalytics(app);
  //input elements
  const email= document.getElementById("email").value;
  const password= document.getElementById("password").value;
  //sumit button
  const submitButton = document.getElementById("submit-button");
  submitButton .addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent the default form submission
  // Perform your registration logic here
    try {
  // Example: Log the email and password to the console
      console.log("Email:", email);
      console.log("Password:", password);

  // You can also send this data to your server or Firebase for registration
await firebase.auth().createUserWithEmailAndPassword(email, password);

      alert("Registration successful!");
  } catch (error) {
    console.error("Error during registration:", error);
    alert("Registration failed. Please try again.");
  }
});