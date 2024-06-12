import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-list-item',
  templateUrl: './notification-list-item.component.html',
  styleUrls: ['./notification-list-item.component.scss']
})
export class NofiticationListItemComponent {
  @Input() data?: any
}
