import { Ticket } from './../model/ticket.model';
import { defineStore } from 'pinia';
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  addDoc,
  query,
  orderBy,
  type Unsubscribe,
  Query,
  CollectionReference,
  type DocumentData,
  DocumentReference,
  setDoc,
} from 'firebase/firestore';
import { db } from '@/js/firebase';
import { useStoreAuth } from '@/stores/storeAuth';
import type { Queue } from '@/model/queue.model';

export type MyQueueState = {
  myQueue: Queue | null;
  myQueueLoaded: boolean;
};
let myQueueRef: DocumentReference<DocumentData>;

let getQueuesSnapshot: Unsubscribe | null = null;

export const useMyQueueStore = defineStore('myQueueStore', {
  state: () => {
    return {
      myQueue: null,
      myQueueLoaded: false,
    } as MyQueueState;
  },
  actions: {
    async init() {
      const storeAuth = useStoreAuth();

      if (storeAuth.user) {
        myQueueRef = doc(db, 'queues', storeAuth.user.id);
        await this.getMyQueue();
      }
    },
    async getMyQueue() {
      this.myQueue = null;
      this.myQueueLoaded = false;

      if (getQueuesSnapshot) getQueuesSnapshot(); // unsubscribe from any active listener

      getQueuesSnapshot = onSnapshot<DocumentData>(
        myQueueRef,
        (doc: any) => {
          this.myQueue = {
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            queueDuration: doc.data().queueDuration,
          };
          this.myQueueLoaded = true;
        },
        error => {
          console.log('error.message: ', error.message);
        }
      );
    },
    // clearNotes() {
    //   this.queues = [];
    // },
    // async addNote(newQueue: Queue) {
    //   let currentDate = new Date().getTime(),
    //     date = currentDate.toString();

    //   await addDoc(queueCollectionRef, {
    //     ...newQueue,
    //     date,
    //   });
    // },
    // async deleteNote(idToDelete: string) {
    //   await deleteDoc(doc(queueCollectionRef, idToDelete));
    // },
    async updateNote(queue: Queue) {
      await setDoc(myQueueRef,queue);

    },
  },
  getters: {
    // getQueue: state => {
    //   return (id: string) => {
    //     return state.queues.filter(queue => queue.id === id)[0];
    //   };
    // },
    // totalQueuesCount: state => {
    //   return state.queues.length;
    // },
  },
});
