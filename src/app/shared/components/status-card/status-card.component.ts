import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent {
  @Input() title: string = '';
  @Input() count: number = 0;
  @Input() icon: string = '';
  @Input() iconColor: string = 'primary';
  @Input() trend: number = 0;
  @Input() trendPeriod: string = 'in last 30 days';
  @Input() linkText: string = 'View All';
  @Input() linkUrl: string = '';
}