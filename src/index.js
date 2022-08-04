import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBFdRxX8UUrKJPqQQXeE5zNLWZFnqujZIk",

  authDomain: "photo-tag-2ea7d.firebaseapp.com",

  projectId: "photo-tag-2ea7d",

  storageBucket: "photo-tag-2ea7d.appspot.com",

  messagingSenderId: "643261747990",

  appId: "1:643261747990:web:08af2c3f9627a766387637",

  measurementId: "G-2V8KTM0NEB"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
