import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private router: Router) {}
  onClick(value: string) {
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
