import app from "firebase/app";

let firebaseConfig = {
  apiKey: "AIzaSyCikN9AGNJlaBBVo5weSCyOO5z8bVRMh44",
  authDomain: "x-chromosome.firebaseapp.com",
  projectId: "x-chromosome",
  storageBucket: "x-chromosome.appspot.com",
  messagingSenderId: "951146910563",
  appId: "1:951146910563:web:ab481374a9f31c8840f956",
  measurementId: "G-TYLF4G8TJM",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
  }
}

export default Firebase;
