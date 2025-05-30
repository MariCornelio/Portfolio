import { Component } from '@angular/core';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-close',
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.css'],
})
export class CloseComponent {
  constructor(private sharedModalService: ModalService) {}
  close() {
    this.sharedModalService.$modal1.emit(false);
    this.sharedModalService.$modal2.emit(false);
    this.sharedModalService.$modal3.emit(false);
    this.sharedModalService.$modal4.emit(false);
    this.sharedModalService.$modal5.emit(false);
    this.sharedModalService.$modal6.emit(false);
    this.sharedModalService.$modal7.emit(false);
    this.sharedModalService.$modal8.emit(false);
    this.sharedModalService.$modal9.emit(false);
    this.sharedModalService.$modal10.emit(false);
  }
}
