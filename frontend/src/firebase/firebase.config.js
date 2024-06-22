// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD-bnA9NT6d372X_au9v5YWRT47_9Jkm5Q",
//   authDomain: "workspot-6dc7a.firebaseapp.com",
//   projectId: "workspot-6dc7a",
//   storageBucket: "workspot-6dc7a.appspot.com",
//   messagingSenderId: "1089188595819",
//   appId: "1:1089188595819:web:c2f6ef0059023a42f7092e"
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db_firebase = getFirestore(app);
export default { app, db_firebase };