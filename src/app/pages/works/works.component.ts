import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import AOS from 'aos';
import { ModalService } from 'src/app/shared/service/modal.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
})
export class WorksComponent implements OnInit {
  constructor(
    private sharedModalService: ModalService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  // @ViewChild('icon') icon!: ElementRef;
  // iconClass!: string;
  valid1: boolean = false;
  valid2: boolean = false;
  valid3: boolean = false;
  valid4: boolean = false;
  valid5: boolean = false;
  valid6: boolean = false;
  valid7: boolean = false;
  valid8: boolean = false;
  valid9: boolean = false;

  background: boolean = false;

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    if (location.pathname === '/works') {
      this.background = true;
    }
    this.sharedModalService.$modal1.subscribe((value) => (this.valid1 = value));
    this.sharedModalService.$modal2.subscribe((value) => (this.valid2 = value));
    this.sharedModalService.$modal3.subscribe((value) => (this.valid3 = value));
    this.sharedModalService.$modal4.subscribe((value) => (this.valid4 = value));
    this.sharedModalService.$modal5.subscribe((value) => (this.valid5 = value));
    this.sharedModalService.$modal6.subscribe((value) => (this.valid6 = value));
    this.sharedModalService.$modal7.subscribe((value) => (this.valid7 = value));
    this.sharedModalService.$modal8.subscribe((value) => (this.valid8 = value));
    this.sharedModalService.$modal9.subscribe((value) => (this.valid9 = value));
  }

  onClick(val: string) {
    if (val === 'val1') {
      this.valid1 = true;
      this.sharedModalService.$modal1.emit(true);
    }
    if (val === 'val2') {
      this.valid2 = true;
      this.sharedModalService.$modal2.emit(true);
    }
    if (val === 'val3') {
      this.valid3 = true;
      this.sharedModalService.$modal3.emit(true);
    }
    if (val === 'val4') {
      this.valid4 = true;
      this.sharedModalService.$modal4.emit(true);
    }
    if (val === 'val5') {
      this.valid5 = true;
      this.sharedModalService.$modal5.emit(true);
    }
    if (val === 'val6') {
      this.valid6 = true;
      this.sharedModalService.$modal6.emit(true);
    }
    if (val === 'val7') {
      this.valid7 = true;
      this.sharedModalService.$modal7.emit(true);
    }
    if (val === 'val8') {
      this.valid8 = true;
      this.sharedModalService.$modal8.emit(true);
    }
    if (val === 'val9') {
      this.valid9 = true;
      this.sharedModalService.$modal9.emit(true);
    }
  }
  @HostListener('click')
  onClick2() {
    this.sharedModalService.$checkedHamburger.emit(false);
    this.changeDetectorRef.markForCheck();
  }
}
