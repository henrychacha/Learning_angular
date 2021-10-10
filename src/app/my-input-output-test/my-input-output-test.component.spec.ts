import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInputOutputTestComponent } from './my-input-output-test.component';

describe('MyInputOutputTestComponent', () => {
  let component: MyInputOutputTestComponent;
  let fixture: ComponentFixture<MyInputOutputTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInputOutputTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInputOutputTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
