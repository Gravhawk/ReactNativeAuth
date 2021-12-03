import * as react from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBjNkZlu_C5uWOQs7ONZmm11dVQNy-SlDw",
    authDomain: "reactnativeauth-9742d.firebaseapp.com",
    projectId: "reactnativeauth-9742d",
    storageBucket: "reactnativeauth-9742d.appspot.com",
    messagingSenderId: "96508016776",
    appId: "1:96508016776:web:98beb865727d802df1c73d"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);