// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-798b0.firebaseapp.com",
  projectId: "mern-auth-798b0",
  storageBucket: "mern-auth-798b0.appspot.com",
  messagingSenderId: "131445815963",
  appId: "1:131445815963:web:65ee761a77e286d069e43e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);