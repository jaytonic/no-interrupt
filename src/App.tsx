import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider, FirestoreProvider, useFirebaseApp } from 'reactfire';
import './App.css';
import AuthenticatedLayout from './Layout/AuthenticatedLayout';
import { Dashboard } from './Pages/Dashboard';
import Login from './Pages/Login';
import { Queue } from './Pages/Queue';
import Register from './Pages/Register';
import Tickets from './Pages/Tickets';

function App() {
  const firebaseApp = useFirebaseApp();
  const firestoreInstance = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <AuthProvider sdk={auth}>
        <Routes>
          <Route path="/" element={<AuthenticatedLayout></AuthenticatedLayout>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/queue" element={<Queue />} />
            <Route path="/tickets" element={<Tickets />} />
          </Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </AuthProvider>
    </FirestoreProvider>
  );
}

export default App;
