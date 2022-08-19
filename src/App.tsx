import React from 'react';
import logo from './logo.svg';
import { doc, getFirestore } from 'firebase/firestore';
import { Test } from './Test';
import {
  FirestoreProvider,
  useFirestoreDocData,
  useFirestore,
  useFirebaseApp,
} from 'reactfire';
import './App.css';

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());
  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <div className='App'>
        <Test />
      </div>
    </FirestoreProvider>
  );
}

export default App;
