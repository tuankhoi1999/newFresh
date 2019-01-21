import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviderComponent } from './devider.component';

describe('DeviderComponent', () => {
  let component: DeviderComponent;
  let fixture: ComponentFixture<DeviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
