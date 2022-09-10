import { browserLocalPersistence, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { Route, Routes } from 'react-router';
import { AuthProvider, FirestoreProvider, useFirebaseApp } from 'reactfire';
import './App.css';
import { RequireAuth } from './Infrastructure/RequireAuth';
import { AuthenticatedLayout } from './layout/AuthenticatedLayout';
import { Configure } from './pages/Configure';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Queue } from './pages/Queue';
import { Register } from './pages/Register';

function App() {
  const firebaseApp = useFirebaseApp();
  const firestoreInstance = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  auth.setPersistence(browserLocalPersistence);
  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <AuthProvider sdk={auth}>
        <div className="min-h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col">
          <Routes>
            <Route path="/" element={<AuthenticatedLayout></AuthenticatedLayout>}>
              <Route
                path=""
                element={
                  <RequireAuth>
                    <Dashboard></Dashboard>
                  </RequireAuth>
                }></Route>
              <Route
                path="queue"
                element={
                  <RequireAuth>
                    <Queue></Queue>
                  </RequireAuth>
                }></Route>
              <Route
                path="configure"
                element={
                  <RequireAuth>
                    <Configure></Configure>
                  </RequireAuth>
                }></Route>
            </Route>

            <Route path="login" element={<Login></Login>}></Route>
            <Route path="register" element={<Register></Register>}></Route>
          </Routes>
        </div>
      </AuthProvider>
    </FirestoreProvider>
  );
}

export default App;
