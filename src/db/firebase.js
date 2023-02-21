import { initializeApp } from "firebase/app";
import {getFirestone} from "firebase/firestone";

const firebaseConfig = {

    apiKey: "AIzaSyAxEeEJgBQ1IOsJ9JsZSKM6gJu1mqiMAM8",
    authDomain: "carritocheg.firebaseapp.com",
    projectId: "carritocheg",
    storageBucket: "carritocheg.appspot.com",
    messagingSenderId: "123349851287",
    appId: "1:123349851287:web:728d6cbeb2d1f6485a9dd2"
  
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);

  export const db = getFirestone(app);