// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7bNX3N-IAj3r5wLMJsVJtBPmj2aIrS5M",
  authDomain: "proyectoreactjs-33076.firebaseapp.com",
  projectId: "proyectoreactjs-33076",
  storageBucket: "proyectoreactjs-33076.appspot.com",
  messagingSenderId: "382218342784",
  appId: "1:382218342784:web:eaa0713d783fc1943eb165"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
