
// first, need to install firebase on frontend via npm install firebase.

import * as firebase from 'firebase/app';
import 'firebase/storage'; // importing storage sdk to store our images
import 'firebase/firestore'; // our database

//these are the two services we are gonna be using 

// Your web app's Firebase configuration - this is the info that our project uses to initialise our firebase app and connect to the backend 
  var firebaseConfig = {
    apiKey: "AIzaSyApnTFNP0Ybrv9xc4TgeJIDZBQhPqA4NHk",
    authDomain: "firegram-29f2c.firebaseapp.com",
    databaseURL: "https://firegram-29f2c.firebaseio.com",
    projectId: "firegram-29f2c",
    storageBucket: "firegram-29f2c.appspot.com",
    messagingSenderId: "108338941759",
    appId: "1:108338941759:web:f7626f940a901001560d8a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Initialise Storage Service
const projectStorage = firebase.storage();
// Initialise Firestore Service
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};

// we need to initalise these 2 services on our project dashboard.