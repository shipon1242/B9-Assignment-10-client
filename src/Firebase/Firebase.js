// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiIOHMeuLvHDOiG0Xd393A0B31_Db5XrI",
  authDomain: "assignment10-c6fa5.firebaseapp.com",
  projectId: "assignment10-c6fa5",
  storageBucket: "assignment10-c6fa5.appspot.com",
  messagingSenderId: "589911604789",
  appId: "1:589911604789:web:22937a81fe43048e7ffb7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth