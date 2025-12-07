// DO Not send firebase config to github repository


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo_u-sRQ6iTpFdgU7IuP84UQHdd119JaQ",
  authDomain: "simple-firebase-auth-8efa0.firebaseapp.com",
  projectId: "simple-firebase-auth-8efa0",
  storageBucket: "simple-firebase-auth-8efa0.firebasestorage.app",
  messagingSenderId: "1071098304202",
  appId: "1:1071098304202:web:2afc2f85ddb00866d08633"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);