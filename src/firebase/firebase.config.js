// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALYLorGeI_x2R8V1uRbSdIqYisVBPkeko",
  authDomain: "healthy-diet-auth.firebaseapp.com",
  projectId: "healthy-diet-auth",
  storageBucket: "healthy-diet-auth.firebasestorage.app",
  messagingSenderId: "141592605064",
  appId: "1:141592605064:web:c9704c29701cd44666ca3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;