import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurjobComponent } from './ourjob.component';

describe('OurjobComponent', () => {
  let component: OurjobComponent;
  let fixture: ComponentFixture<OurjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
