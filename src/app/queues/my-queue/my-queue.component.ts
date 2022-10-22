import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { docData, Firestore } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-queue',
  templateUrl: './my-queue.component.html',
  styleUrls: ['./my-queue.component.scss'],
})
export class MyQueueComponent implements OnInit {
  public readonly myQueue$: Observable<any>;
  constructor(private firestore: Firestore, private auth: Auth) {
    const userId = this.auth.currentUser?.uid;
    const docReference = doc(this.firestore, 'queues/' + userId);
    this.myQueue$ = docData(docReference);
  }

  ngOnInit(): void {}
}
