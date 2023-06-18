// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyBt63vViAYL3GwDaUGx5PZybMKRv0fg1Kc",
    authDomain: "tiktokclone-gabrielmontoni.firebaseapp.com",
    projectId: "tiktokclone-gabrielmontoni",
    storageBucket: "tiktokclone-gabrielmontoni.appspot.com",
    messagingSenderId: "698118198137",
    appId: "1:698118198137:web:6d22662b97cd4d1dee15a8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
