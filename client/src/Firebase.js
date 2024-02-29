// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlSg0zlIo87Yd2uoxR-qszTqBCimXJXQo",
  authDomain: "tutorial-304b7.firebaseapp.com",
  projectId: "tutorial-304b7",
  storageBucket: "tutorial-304b7.appspot.com",
  messagingSenderId: "965150816186",
  appId: "1:965150816186:web:f76187946fbe06ca110f83",
  measurementId: "G-XTY0VPTE0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;