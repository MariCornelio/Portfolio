import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  background: boolean = false;
  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);

    if (location.pathname === '/contact') {
      this.background = true;
    }
  }
}
