// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtPRfjT2pR6QN3G9jLOvEWrQG37sN5Y3k",
    authDomain: "react-http-851aa.firebaseapp.com",
    databaseURL: "https://react-http-851aa-default-rtdb.firebaseio.com",
    projectId: "react-http-851aa",
    storageBucket: "react-http-851aa.appspot.com",
    messagingSenderId: "498758508532",
    appId: "1:498758508532:web:2ac2601ca6a90aa12923a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);