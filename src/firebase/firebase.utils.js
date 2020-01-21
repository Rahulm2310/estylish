import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBfIZCYh8-ZJyBFNxA-fc9e2_6kJXVT5Qc',
  authDomain: 'crwn-db-43e25.firebaseapp.com',
  databaseURL: 'https://crwn-db-43e25.firebaseio.com',
  projectId: 'crwn-db-43e25',
  storageBucket: 'crwn-db-43e25.appspot.com',
  messagingSenderId: '979619339174',
  appId: '1:979619339174:web:2cb52ae8d082532c5fcd67',
  measurementId: 'G-W794CKL5DV'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//=============== GOOGLE AUTHENTICATION =====================
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
