// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcef--uLdt-nNvFI5TMgDYs81ioXdpeK4",
  authDomain: "social-app-96287.firebaseapp.com",
  projectId: "social-app-96287",
  storageBucket: "social-app-96287.appspot.com",
  messagingSenderId: "223185596728",
  appId: "1:223185596728:web:af25115866b1c00adf51cd",
  measurementId: "G-4ZH2MQWQ7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
