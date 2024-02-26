import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBKKIfJd6PkWCyTbF5p2izotwT7881Hoik",
  authDomain: "ecommerceleon.firebaseapp.com",
  projectId: "ecommerceleon",
  storageBucket: "ecommerceleon.appspot.com",
  messagingSenderId: "858918275007",
  appId: "1:858918275007:web:54b403a06a98fe0316030a"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)