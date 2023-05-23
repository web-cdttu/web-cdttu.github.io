import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-section-title',
  templateUrl: './home-section-title.component.html',
  styleUrls: ['./home-section-title.component.scss']
})
export class HomeSectionTitleComponent {
  @Input() viewMore = {
    path: ''
  }
}
