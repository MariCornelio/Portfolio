import { Component, OnInit } from '@angular/core';
import { ModalService } from '../service/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isCkecked: boolean = false;
  constructor(private modalService: ModalService, private router: Router) {}
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
  onClickRouter(value: string) {
    if (value === 'home') {
      this.router.navigate(['']);
      window.scrollTo({ top: 0 });
    }
    if (value === 'works') {
      this.router.navigate(['works']);
      window.scrollTo({ top: 0 });
    }
    if (value === 'contact') {
      this.router.navigate(['contact']);
      window.scrollTo({ top: 0 });
    }
  }
}
