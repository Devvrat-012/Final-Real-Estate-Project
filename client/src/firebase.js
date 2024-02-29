// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-00.firebaseapp.com",
  projectId: "real-estate-00",
  storageBucket: "real-estate-00.appspot.com",
  messagingSenderId: "1029192521999",
  appId: "1:1029192521999:web:6c492c0c6c55e61c0d467a",
  measurementId: "G-6S0DZ1R9MC"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
