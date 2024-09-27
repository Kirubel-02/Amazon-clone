
import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzOi1GP5Dh7tydiTuVCNHpbQwliAu70PQ",
  authDomain: "clone-bb050.firebaseapp.com",
  projectId: "clone-bb050",
  storageBucket: "clone-bb050.appspot.com",
  messagingSenderId: "750395641348",
  appId: "1:750395641348:web:2648090b781125923daf51",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();