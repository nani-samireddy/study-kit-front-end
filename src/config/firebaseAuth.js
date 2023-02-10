// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBG7j5OEnZG_BKSMRsbbVKqSJBJKgZLq6I",
    authDomain: "studykit-f0b87.firebaseapp.com",
    projectId: "studykit-f0b87",
    storageBucket: "studykit-f0b87.appspot.com",
    messagingSenderId: "593193711367",
    appId: "1:593193711367:web:1ccbbaca76fb0db04337a2",
    measurementId: "G-PR79MNXCGW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);