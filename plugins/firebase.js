import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBuh0zuSs2AlfpJYx1RLFYYaHt9rmtXJP0",
  authDomain: "market-a4929.firebaseapp.com",
  projectId: "market-a4929",
  storageBucket: "market-a4929.appspot.com",
  messagingSenderId: "155285295494",
  appId: "1:155285295494:web:431fda6bc09f8ebecc1c07"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
