
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotesai-7fd37.firebaseapp.com",
  projectId: "examnotesai-7fd37",
  storageBucket: "examnotesai-7fd37.firebasestorage.app",
  messagingSenderId: "1060502278652",
  appId: "1:1060502278652:web:a33ea19139428548322279"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}