import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationComponent } from './notification-card.component';

describe('NotificationCardComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
