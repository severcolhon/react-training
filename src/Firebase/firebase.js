import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDRyFddyE3XCc-GlcaJE8z12LeIq83bebE",
  authDomain: "react-training-bc883.firebaseapp.com",
  databaseURL: "https://react-training-bc883.firebaseio.com",
  projectId: "react-training-bc883",
  storageBucket: "react-training-bc883.appspot.com",
  messagingSenderId: "338583549813",
  appId: "1:338583549813:web:759aafb9faa8e3dc"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
}

export default Firebase;
