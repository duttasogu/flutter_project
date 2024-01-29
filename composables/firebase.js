
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD_HImxRViTF7PPHf5jUCktOL26b65xsa0",
  authDomain: "otp-verify-a7a17.firebaseapp.com",
  projectId: "otp-verify-a7a17",
  storageBucket: "otp-verify-a7a17.appspot.com",
  messagingSenderId: "859343411807",
  appId: "1:859343411807:web:b57578eb81dbcae7eb59ea",
  measurementId: "G-06DYQ5G9BD"
};

// Initialize Firebase
const app = initializeApp(Demo_app);
const analytics = getAnalytics(app);