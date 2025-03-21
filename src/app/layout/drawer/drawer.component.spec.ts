import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerComponent } from './drawer.component';

describe('SidebarComponent', () => {
  let component: DrawerComponent;
  let fixture: ComponentFixture<DrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrawerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
