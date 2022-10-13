// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwoUA2bkSMLI2xLOMro7eGwVF2yv_Korc",
  authDomain: "proyectoweb-39f0a.firebaseapp.com",
  projectId: "proyectoweb-39f0a",
  storageBucket: "proyectoweb-39f0a.appspot.com",
  messagingSenderId: "22963133194",
  appId: "1:22963133194:web:fb9defbf5dd7e7b50638f3",
  measurementId: "G-XCQTGKNKLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export {app,auth}