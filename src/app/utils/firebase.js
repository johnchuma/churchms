// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBuMgtsYPMhO4eIh4Y-P9y2B2xVQ_aV6j4",
  authDomain: "mordenchurchms.firebaseapp.com",
  projectId: "mordenchurchms",
  storageBucket: "mordenchurchms.appspot.com",
  messagingSenderId: "1063690596266",
  appId: "1:1063690596266:web:c60b69e58e940b726105d3",
  measurementId: "G-TH1L19CELV"
};


export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const storage = getStorage(app)
export const auth = getAuth(app)
export const firestore = getFirestore(app)
