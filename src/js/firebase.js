import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCSBbPWvm_6Rw4MxWTlQM5H-gT3u4Tatz0',
  authDomain: 'nointerrupt-5d0da.firebaseapp.com',
  projectId: 'nointerrupt-5d0da',
  storageBucket: 'nointerrupt-5d0da.appspot.com',
  messagingSenderId: '892406402733',
  appId: '1:892406402733:web:f2e511e7020e262e2ec024',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export  { db, auth };
