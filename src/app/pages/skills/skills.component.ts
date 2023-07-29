import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  background: boolean = false;
  rotation: boolean = true;
  skillsNone: boolean = false;
  router = location.pathname;
  constructor(private routerSvc: Router) {}
  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    if (location.pathname === '/skills') {
      this.background = true;
    }
    if (this.router === '/') {
      this.skillsNone = true;
    }
    if (this.router === '/skills') {
      this.skillsNone = false;
    }
  }
  onClick() {
    if (this.router === '/') {
      this.routerSvc.navigate(['skills']);
      window.scrollTo({ top: 0 });
    } else {
      const rotation1 = !this.rotation;
      if (!rotation1) {
        this.rotation = false;
        this.skillsNone = true;
      } else {
        this.rotation = true;
        this.skillsNone = false;
      }
    }
  }
}
