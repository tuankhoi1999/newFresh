import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformButtonComponent } from './transform-button.component';

describe('TransformButtonComponent', () => {
  let component: TransformButtonComponent;
  let fixture: ComponentFixture<TransformButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
