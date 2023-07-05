import { Component, OnInit } from '@angular/core';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isCkecked: boolean = false;
  constructor(private modalService: ModalService) {}
  ngOnInit(): void {
    this.modalService.$checkedHamburger.subscribe(
      (value) => (this.isCkecked = value)
    );
  }
  onClickLabel() {
    if (this.isCkecked) {
      this.modalService.$checkedHamburger.emit(false);
    } else {
      this.modalService.$checkedHamburger.emit(true);
    }
  }
}
