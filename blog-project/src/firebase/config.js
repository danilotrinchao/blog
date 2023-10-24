/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import{getFirestore} from'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDXvqZKkZJ5F8W127mf99nzSU67u0jxrKY",
  authDomain: "firstblog-c89d4.firebaseapp.com",
  projectId: "firstblog-c89d4",
  storageBucket: "firstblog-c89d4.appspot.com",
  messagingSenderId: "989049055455",
  appId: "1:989049055455:web:20f76def48d8246df7616a",
  measurementId: "G-JL63BVP8S8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};