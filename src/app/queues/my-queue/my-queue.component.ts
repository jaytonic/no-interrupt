import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, docData, Firestore, Timestamp } from '@angular/fire/firestore';
import { combineLatest, interval, map, Observable } from 'rxjs';
import { Queue } from '../queue.model';

@Component({
  selector: 'app-my-queue',
  templateUrl: './my-queue.component.html',
  styleUrls: ['./my-queue.component.scss'],
})
export class MyQueueComponent implements OnInit {
  public readonly myQueue$: Observable<Queue | null>;

  public remainingTime!: Observable<number>;

  constructor(private firestore: Firestore, private auth: Auth) {
    const userId = this.auth.currentUser?.uid;
    const docReference = doc(firestore, 'queues/' + userId);
    this.myQueue$ = docData(docReference).pipe(map((d) => d as Queue));
  }

  ngOnInit(): void {
    this.remainingTime = combineLatest([this.myQueue$, interval(1000)]).pipe(
      map(([queue, timer]) => {
        if (queue && queue.nextInterruptionTime) {
          return queue.nextInterruptionTime.toDate().getTime() - new Date().getTime();
        }
        return 0;
      })
    );
  }
}
