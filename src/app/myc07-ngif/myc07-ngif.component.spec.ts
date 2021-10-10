import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc07NgifComponent } from './myc07-ngif.component';

describe('Myc07NgifComponent', () => {
  let component: Myc07NgifComponent;
  let fixture: ComponentFixture<Myc07NgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc07NgifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc07NgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
