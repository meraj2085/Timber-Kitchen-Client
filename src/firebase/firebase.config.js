// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi4IPUHl5MxaS8K8dJEYNCrIwTa8j4aMQ",
  authDomain: "timber-kitchen.firebaseapp.com",
  projectId: "timber-kitchen",
  storageBucket: "timber-kitchen.appspot.com",
  messagingSenderId: "366977369929",
  appId: "1:366977369929:web:d3f2bf41a775f5f2e17c98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;