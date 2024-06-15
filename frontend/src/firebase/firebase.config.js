// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-bnA9NT6d372X_au9v5YWRT47_9Jkm5Q",
  authDomain: "workspot-6dc7a.firebaseapp.com",
  projectId: "workspot-6dc7a",
  storageBucket: "workspot-6dc7a.appspot.com",
  messagingSenderId: "1089188595819",
  appId: "1:1089188595819:web:c2f6ef0059023a42f7092e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db_firebase = getFirestore(app);
export default { app, db_firebase };