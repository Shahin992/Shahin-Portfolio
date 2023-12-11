// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQwlvfACdaVLv8DC7eOfgAD0cFg8M64Fk",
  authDomain: "portfolio-shahin.firebaseapp.com",
  projectId: "portfolio-shahin",
  storageBucket: "portfolio-shahin.appspot.com",
  messagingSenderId: "131385722018",
  appId: "1:131385722018:web:6f2feb9134a1208c4283fb",
  measurementId: "G-6RC3JNRS2S"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
