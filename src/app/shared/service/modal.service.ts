import { EventEmitter, Injectable } from '@angular/core';

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
  constructor() {}
}
