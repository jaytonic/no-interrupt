import { getFirestore } from 'firebase/firestore';
import { Route, Routes } from 'react-router-dom';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import './App.css';
import AuthenticatedLayout from './AuthenticatedLayout';
import { Dashboard } from './Dashboard';
import Login from './Login';
import { Queue } from './Queue';
import Register from './Register';
import Tickets from './Tickets';

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());
  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <Routes>
        <Route path="/" element={<AuthenticatedLayout></AuthenticatedLayout>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/tickets" element={<Tickets />} />
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </FirestoreProvider>
  );
}

export default App;
