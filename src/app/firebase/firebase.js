// src/app/firebase/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB_DCOWXPraHDJyEqlg8D0laO0Aeqpq8zc",
  authDomain: "ai-toolhub.firebaseapp.com",
  projectId: "ai-toolhub",
  storageBucket: "ai-toolhub.appspot.com",
  messagingSenderId: "683335123653",
  appId: "1:683335123653:web:939fa057cdafd553d1a6ac",
  measurementId: "G-WKNV4E0317"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
