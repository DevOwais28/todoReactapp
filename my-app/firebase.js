// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Yoimport app from './firebase'ur web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXtmDLdtI3rFOHX6XeowCwT0bHg1vt6Z0",
  authDomain: "todo-app-bfea6.firebaseapp.com",
  projectId: "todo-app-bfea6",
  storageBucket: "todo-app-bfea6.firebasestorage.app",
  messagingSenderId: "1000811905623",
  appId: "1:1000811905623:web:f6b51471740a7adfb59912",
  measurementId: "G-LEH9K3H7ZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db}