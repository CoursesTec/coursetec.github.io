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
  appId: "1:184929937348:web:33872c49f255366536a691",
  measurementId: "G-5DSHMR671K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);