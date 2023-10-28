// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8kWeTvZCiRQvllxKTBBeA5e8CYN2-22s",
  authDomain: "react-chat-app-eef13.firebaseapp.com",
  projectId: "react-chat-app-eef13",
  storageBucket: "react-chat-app-eef13.appspot.com",
  messagingSenderId: "356404141808",
  appId: "1:356404141808:web:ab818431327730efcfac35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);