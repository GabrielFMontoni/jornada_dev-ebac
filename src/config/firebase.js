// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyCUkKrC99i1abLr08CyyMJucCTSiM90BV0",
    authDomain: "tiktokclone-gabrielmonto-6bf55.firebaseapp.com",
    projectId: "tiktokclone-gabrielmonto-6bf55",
    storageBucket: "tiktokclone-gabrielmonto-6bf55.appspot.com",
    messagingSenderId: "350637715362",
    appId: "1:350637715362:web:cc416248499a4ff3dd4cfb"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
