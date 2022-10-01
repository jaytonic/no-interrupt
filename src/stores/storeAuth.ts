import { User } from '@/model/user.model';
import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/js/firebase';
import type { Router } from 'vue-router';

export type AuthState = {
  user: User | null;
  router: Router | null;
};

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {
      user: {},
      router: null,
    } as AuthState;
  },
  actions: {
    init() {
      onAuthStateChanged(auth, user => {
        if (user && user.uid && user.email) {
          this.user = { id: user.uid, email: user.email };
          this.router?.push('/');
        } else {
          this.user = null;
          this.router?.replace('/auth');
        }
      });
    },
    registerUser(email: string, password: string) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          const user = userCredential.user;
          // console.log('user: ', user)
        })
        .catch(error => {
          // console.log('error.message: ', error.message)
        });
    },
    loginUser(email: string, password: string) {
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          const user = userCredential.user;
          // console.log('user: ', user)
        })
        .catch(error => {
          // console.log('error.message: ', error.message)
        });
    },
    logoutUser() {
      signOut(auth)
        .then(() => {
          // console.log('User signed out')
        })
        .catch(error => {
          // console.log(error.message)
        });
    },
  },
});
