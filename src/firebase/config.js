// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoKLLI41ATN-qA9tpLw_b7UdWdnFmD7fY",
  authDomain: "black-cat-naciff.firebaseapp.com",
  projectId: "black-cat-naciff",
  storageBucket: "black-cat-naciff.appspot.com",
  messagingSenderId: "558901062825",
  appId: "1:558901062825:web:1c9b5a6c1b553e8bf00db8",
  measurementId: "G-ZSJLWJLCMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
