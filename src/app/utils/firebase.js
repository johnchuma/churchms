// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDrOSXJSWPAjhZhzJIczNyK86-VPG5OdfE",
  authDomain: "ndajili-pharmacy.firebaseapp.com",
  projectId: "ndajili-pharmacy",
  storageBucket: "ndajili-pharmacy.appspot.com",
  messagingSenderId: "39175149675",
  appId: "1:39175149675:web:4cb6bb19b44d69a855792e",
  measurementId: "G-D7036SFR1D"
};


export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const storage = getStorage(app)
export const auth = getAuth(app)
export const firestore = getFirestore(app)
