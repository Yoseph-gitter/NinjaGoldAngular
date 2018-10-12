import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjaPlayGroundComponent } from "./ninja-play-ground.component";

describe('NinjaPlayGroundComponent', () => {
  let component: NinjaPlayGroundComponent;
  let fixture: ComponentFixture<NinjaPlayGroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinjaPlayGroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinjaPlayGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
