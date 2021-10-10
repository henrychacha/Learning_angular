import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc09DatabingdingComponent } from './myc09-databingding.component';

describe('Myc09DatabingdingComponent', () => {
  let component: Myc09DatabingdingComponent;
  let fixture: ComponentFixture<Myc09DatabingdingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc09DatabingdingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc09DatabingdingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
