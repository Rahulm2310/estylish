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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//=============== GOOGLE AUTHENTICATION =====================
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;