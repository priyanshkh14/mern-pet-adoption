// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-pet-adoption.firebaseapp.com",
  projectId: "mern-pet-adoption",
  storageBucket: "mern-pet-adoption.appspot.com",
  messagingSenderId: "73146957401",
  appId: "1:73146957401:web:24b790f51b14154b4d3b48"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);