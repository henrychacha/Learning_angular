import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc08NgswitchComponent } from './myc08-ngswitch.component';

describe('Myc08NgswitchComponent', () => {
  let component: Myc08NgswitchComponent;
  let fixture: ComponentFixture<Myc08NgswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc08NgswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc08NgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
