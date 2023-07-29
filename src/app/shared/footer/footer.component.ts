import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(
    private router: Router,
    private modalService: ModalService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  @HostListener('click')
  onClick2() {
    this.modalService.$checkedHamburger.emit(false);
    this.changeDetectorRef.markForCheck();
  }
  onClick(value: string) {
    if (value === 'home') {
      this.router.navigate(['']);
      window.scrollTo({ top: 0 });
    }
    if (value === 'skills') {
      this.router.navigate(['skills']);
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
