// Import the functions you need from the SDKs you need
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUaeH4uHog6z81BdfF6d_370xUpvLVRDk",
    authDomain: "rn-todo-app-f1902.firebaseapp.com",
    projectId: "rn-todo-app-f1902",
    storageBucket: "rn-todo-app-f1902.appspot.com",
    messagingSenderId: "88325616479",
    appId: "1:88325616479:web:59400cb3f51b23efb2fcea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };