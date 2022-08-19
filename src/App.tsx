import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import './App.css';
import { Test } from './Test';

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
