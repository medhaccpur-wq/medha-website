// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCg-tP51HEY4d-1t7IYFu38ha_NP-uhAjc",
  authDomain: "medha-portal.firebaseapp.com",
  projectId: "medha-portal",
  storageBucket: "medha-portal.firebasestorage.app",
  messagingSenderId: "409872731570",
  appId: "1:409872731570:web:95780e9725a903b0a468ab",
  measurementId: "G-SDVBPEQ1G3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
