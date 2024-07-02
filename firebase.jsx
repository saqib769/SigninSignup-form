// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5tNdB_6rRGjKIzP1hed-kCgx-3eEIJJE",
  authDomain: "authentication-527ab.firebaseapp.com",
  projectId: "authentication-527ab",
  storageBucket: "authentication-527ab.appspot.com",
  messagingSenderId: "840101634830",
  appId: "1:840101634830:web:d52eb54413b2f89871ad5f"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)

 export {auth}