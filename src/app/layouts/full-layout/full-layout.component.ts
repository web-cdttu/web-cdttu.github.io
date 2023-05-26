import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent {
  constructor(private router: Router) {
    setTimeout(() => {
      router.events.subscribe((val: any) => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      });
    })
  }
}
