import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  $modal1 = new EventEmitter<boolean>();
  $modal2 = new EventEmitter<boolean>();
  $modal3 = new EventEmitter<boolean>();
  $modal4 = new EventEmitter<boolean>();
  $modal5 = new EventEmitter<boolean>();
  $modal6 = new EventEmitter<boolean>();
  $modal7 = new EventEmitter<boolean>();
  $modal8 = new EventEmitter<boolean>();
  $modal9 = new EventEmitter<boolean>();

  $checkedHamburger = new EventEmitter<boolean>();
  // private checkedSubject = new BehaviorSubject<boolean>(false);
  constructor() {}
  // get isChecked$(): Observable<boolean> {
  //   return this.checkedSubject.asObservable();
  // }
  // checkedHamburger(): void {
  //   this.checkedSubject.next(false);
  // }
}
