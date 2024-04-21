// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import 'firebase/compat/storage';
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeJ553gGvKfJAHvGyWXsbw_ZWN82kQsbI",
  authDomain: "olx-react-project-cc832.firebaseapp.com",
  projectId: "olx-react-project-cc832",
  storageBucket: "olx-react-project-cc832.appspot.com",
  messagingSenderId: "151674085553",
  appId: "1:151674085553:web:8e7916e4528c6160c88290",
  measurementId: "G-J3L9B0PGQ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);
export const db = getFirestore();
export default app;