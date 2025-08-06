
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcljM6PlClUXANzscpzDqVVZAwKgeUZrs",
  authDomain: "quizz-6aba7.firebaseapp.com",
  projectId: "quizz-6aba7",
  storageBucket: "quizz-6aba7.firebasestorage.app",
  messagingSenderId: "685686053801",
  appId: "1:685686053801:web:5709747821acd20ca7c2b8",
  measurementId: "G-SJMNCJ8LWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);