import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhGe_m86SVHyH_iYs3DYU47_aZ9bOyUNs",
  authDomain: "sa-creative-hub.firebaseapp.com",
  projectId: "sa-creative-hub",
  storageBucket: "sa-creative-hub.firebasestorage.app",
  messagingSenderId: "736278637908",
  appId: "1:736278637908:web:6e7c9c2ee459523290acc1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };