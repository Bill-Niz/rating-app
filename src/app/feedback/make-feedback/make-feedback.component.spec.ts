import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeFeedbackComponent } from './make-feedback.component';

describe('MakeFeedbackComponent', () => {
  let component: MakeFeedbackComponent;
  let fixture: ComponentFixture<MakeFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
