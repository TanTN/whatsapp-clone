// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKx3z2j4ZjmR6j4C47fwKrmraLkI-f224",
    authDomain: "whatsapp-clone-c8a09.firebaseapp.com",
    projectId: "whatsapp-clone-c8a09",
    storageBucket: "whatsapp-clone-c8a09.appspot.com",
    messagingSenderId: "567541564471",
    appId: "1:567541564471:web:c07efd06b6dc8a3036abb2",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
