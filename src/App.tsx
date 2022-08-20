import { browserLocalPersistence, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider, FirestoreProvider, useFirebaseApp } from 'reactfire';
import './App.css';
import AuthenticatedLayout from './Layout/AuthenticatedLayout';
import { Dashboard } from './Pages/Dashboard';
import Login from './Pages/Auth/Login';
import { Queue } from './Pages/Queue/Queue';
import Register from './Pages/Auth/Register';
import Tickets from './Pages/Tickets';
import { RequireAuth } from './Infrastructure/RequireAuth';
import Edit from './Pages/Queue/Edit';

function App() {
  const firebaseApp = useFirebaseApp();
  const firestoreInstance = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  auth.setPersistence(browserLocalPersistence);
  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <AuthProvider sdk={auth}>
        <Routes>
          <Route path="/" element={<AuthenticatedLayout></AuthenticatedLayout>}>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Dashboard></Dashboard>
                </RequireAuth>
              }
            />
            <Route
              path="/queue"
              element={
                <RequireAuth>
                  <Queue></Queue>
                </RequireAuth>
              }
            />
            <Route
              path="/edit"
              element={
                <RequireAuth>
                  <Edit></Edit>
                </RequireAuth>
              }
            />
            <Route
              path="/tickets"
              element={
                <RequireAuth>
                  <Tickets />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </AuthProvider>
    </FirestoreProvider>
  );
}

export default App;
