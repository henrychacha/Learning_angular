import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc10ServiceComponent } from './myc10-service.component';

describe('Myc10ServiceComponent', () => {
  let component: Myc10ServiceComponent;
  let fixture: ComponentFixture<Myc10ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc10ServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc10ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
