import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: 'AIzaSyCSBbPWvm_6Rw4MxWTlQM5H-gT3u4Tatz0',
  authDomain: 'nointerrupt-5d0da.firebaseapp.com',
  projectId: 'nointerrupt-5d0da',
  storageBucket: 'nointerrupt-5d0da.appspot.com',
  messagingSenderId: '892406402733',
  appId: '1:892406402733:web:f2e511e7020e262e2ec024',
};
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
