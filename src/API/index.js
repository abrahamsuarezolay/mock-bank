// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD0f4daYdpHXTffpfb43mWsrf3pVI-K02A",
  authDomain: "mockbank-f67f8.firebaseapp.com",
  projectId: "mockbank-f67f8",
  storageBucket: "mockbank-f67f8.appspot.com",
  messagingSenderId: "187687114706",
  appId: "1:187687114706:web:6f1db293e4246b4649da0b",
  measurementId: "G-E8572R55Y0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default db;