// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBU5YHT1FuZuqLa68Ss-IhV1o3rmyKJZvg",
    authDomain: "dik-dik-test.firebaseapp.com",
    databaseURL: "https://dik-dik-test-default-rtdb.firebaseio.com",
    projectId: "dik-dik-test",
    storageBucket: "dik-dik-test.appspot.com",
    messagingSenderId: "1036742382979",
    appId: "1:1036742382979:web:23fa3c7d023d8b62dbd2b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);