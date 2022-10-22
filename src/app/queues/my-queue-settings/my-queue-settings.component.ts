import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import {
  doc,
  DocumentData,
  DocumentReference,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { Queue } from '../queue.model';
import { Subscription } from 'rxjs';
import { docData, Firestore } from '@angular/fire/firestore';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-my-queue-settings',
  templateUrl: './my-queue-settings.component.html',
  styleUrls: ['./my-queue-settings.component.scss']
})
export class MyQueueSettingsComponent implements OnInit, OnDestroy {
  form = this.fb.group({
    title: [
      this.auth.currentUser?.displayName + "'s queue",
      [Validators.required, Validators.minLength(3)],
    ],
    welcomeText: [
      'Welcome to the queue of ' + this.auth.currentUser?.displayName,
    ],
    queueDuration: [
      new Date(1970, 1, 1, 0, 20),
      [Validators.min(10), Validators.required],
    ],
  });
  docReference!: DocumentReference<DocumentData>;
  subscription!: Subscription;
  currentQueue: Queue | null = null;

  constructor(
    private fb: NonNullableFormBuilder,
    private auth: Auth,
    private firestore: Firestore,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    const userId = this.auth.currentUser?.uid;
    this.docReference = doc(this.firestore, 'queues/' + userId);
    this.subscription = docData(this.docReference).subscribe((doc) => {
      if (doc) {
        this.currentQueue = doc as Queue;
        this.form.patchValue({
          title: doc['title'],
          welcomeText: doc['welcomeText'],
          queueDuration: new Date(1970, 1, 1, 0, doc['queueDuration']),
        });
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      await setDoc(this.docReference, {
        ...this.currentQueue,
        title: this.form.value.title,
        welcomeText: this.form.value.welcomeText,
        queueDuration:
          this.form.value.queueDuration!.getMinutes() +
          this.form.value.queueDuration!.getHours() * 60,
      });
      await this.messageService.add({
        severity: 'success',
        summary: 'Queue modified',
        detail: 'The queue has been successfully modified!',
      });
      await this.router.navigateByUrl('/queues');
    }
  }
}
