// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4a-cpxR8pEj859eduXfg7hnwsb5daWaA",
  authDomain: "moha-miloni-practice.firebaseapp.com",
  projectId: "moha-miloni-practice",
  storageBucket: "moha-miloni-practice.appspot.com",
  messagingSenderId: "25460342169",
  appId: "1:25460342169:web:aabfb4d7769e2b6587e708"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;