// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBanvuIqRyBUxfSx-AUcS_db8jwTDdWGzA",
  authDomain: "netflix-gpt-b5c43.firebaseapp.com",
  projectId: "netflix-gpt-b5c43",
  storageBucket: "netflix-gpt-b5c43.firebasestorage.app",
  messagingSenderId: "1077280858802",
  appId: "1:1077280858802:web:8968c1790248536ff2dfab",
  measurementId: "G-XYS4BFB3Y7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);