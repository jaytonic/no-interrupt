import { Timestamp } from "firebase/firestore";

export interface Queue {
  id: string;
  name: string;
  welcomeText: string;
  queueDuration: number;
  isOpen: boolean;
  noInterruptionMode: boolean;
  nextInterruptionTime:  null | Timestamp;
}
