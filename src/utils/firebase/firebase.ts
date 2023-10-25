// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAGptW5Wf-0bK8T0Ehb9q8AI8MBoDxorUI",

  authDomain: "ghostish-boo45.firebaseapp.com",

  projectId: "ghostish-boo45",

  storageBucket: "ghostish-boo45.appspot.com",

  messagingSenderId: "668441812921",

  appId: "1:668441812921:web:911610876ac1acbab5e068",

  measurementId: "G-YLVHK26HZB",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// const analytics = getAnalytics(app);
