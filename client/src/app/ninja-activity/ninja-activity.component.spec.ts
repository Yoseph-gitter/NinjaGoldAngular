import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjaActivityComponent } from "./ninja-activity.component";

describe('NinjaActivityComponent', () => {
  let component: NinjaActivityComponent;
  let fixture: ComponentFixture<NinjaActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinjaActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinjaActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
