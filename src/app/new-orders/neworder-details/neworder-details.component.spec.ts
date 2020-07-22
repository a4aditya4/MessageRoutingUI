import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeworderDetailsComponent } from './neworder-details.component';

describe('NeworderDetailsComponent', () => {
  let component: NeworderDetailsComponent;
  let fixture: ComponentFixture<NeworderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeworderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeworderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
