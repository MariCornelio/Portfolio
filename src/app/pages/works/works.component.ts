import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
})
export class WorksComponent implements OnInit {
  constructor() {}
  // @ViewChild('icon') icon!: ElementRef;
  // iconClass!: string;
  valid: boolean = false;

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

  onClick() {
    this.valid = true;
  }
  close() {
    // if (this.icon.nativeElement.className === 'Icon') {
    //   this.iconClass = 'Icon open';
    // } else {
    //   this.iconClass = 'Icon';
    // }
    this.valid = false;
  }
}
