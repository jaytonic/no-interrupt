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
} from 'firebase/firestore';
import { db } from '@/js/firebase';
import { useStoreAuth } from '@/stores/storeAuth';
import type { Queue } from '@/model/queue.model';

export type QueuesState = {
  queues: Queue[];
  queuesLoaded: boolean;
};
let queueCollectionRef: CollectionReference<DocumentData>;
let queuesCollectionQuery: Query<DocumentData>;

let getQueuesSnapshot: Unsubscribe | null = null;

export const useStoreNotes = defineStore('storeQueues', {
  state: () => {
    return {
      queues: [],
      queuesLoaded: false,
    } as QueuesState;
  },
  actions: {
    init() {
      // const storeAuth = useStoreAuth();

      //notesCollectionRef = collection(db, 'queues', storeAuth.user.id, 'notes');
      queueCollectionRef = collection(db, 'queues');
      queuesCollectionQuery = query(queueCollectionRef, orderBy('title', 'asc'));
      this.getNotes();
    },
    async getNotes() {
      this.queuesLoaded = false;

      if (getQueuesSnapshot) getQueuesSnapshot(); // unsubscribe from any active listener

      getQueuesSnapshot = onSnapshot<DocumentData>(
        queuesCollectionQuery,
        (queuesSnapshot: any) => {
          let queues: Queue[] = [];
          queuesSnapshot.forEach((doc: any) => {
            let queue: Queue = {
              id: doc.id,
              title: doc.data().title,
              description: doc.data().description,
              queueOpen: doc.data().queueOpen,
            };
            queues.push(queue);
          });
          this.queues = queues;
          this.queuesLoaded = true;
        },
        error => {
          console.log('error.message: ', error.message);
        }
      );
    },
    clearNotes() {
      this.queues = [];
    },
    async addNote(newQueue: Queue) {
      let currentDate = new Date().getTime(),
        date = currentDate.toString();

      await addDoc(queueCollectionRef, {
        ...newQueue,
        date,
      });
    },
    async deleteNote(idToDelete: string) {
      await deleteDoc(doc(queueCollectionRef, idToDelete));
    },
    async updateNote(id: string, queue: Queue) {
      await updateDoc(doc(queueCollectionRef, id), {
        ...queue,
      });
    },
  },
  getters: {
    getQueue: state => {
      return (id: string) => {
        return state.queues.filter(queue => queue.id === id)[0];
      };
    },
    totalQueuesCount: state => {
      return state.queues.length;
    },
  },
});
