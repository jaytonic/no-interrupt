import { Route, Routes } from 'react-router';
import './App.css';
import { AuthenticatedLayout } from './layout/AuthenticatedLayout';
import { PlainLayout } from './layout/PlainLayout';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Queue } from './pages/Queue';
import { AuthProvider, FirestoreProvider, useFirebaseApp } from 'reactfire';
import { getFirestore } from 'firebase/firestore';
import { browserLocalPersistence, getAuth } from 'firebase/auth';
import { Register } from './pages/Register';
import { RequireAuth } from './Infrastructure/RequireAuth';

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
