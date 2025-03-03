import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopViolatorsComponent } from './top-violators.component';

describe('TopViolatorsComponent', () => {
  let component: TopViolatorsComponent;
  let fixture: ComponentFixture<TopViolatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopViolatorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopViolatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
