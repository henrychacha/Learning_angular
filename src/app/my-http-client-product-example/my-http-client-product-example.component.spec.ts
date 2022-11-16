import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHttpClientProductExampleComponent } from './my-http-client-product-example.component';

describe('MyHttpClientProductExampleComponent', () => {
  let component: MyHttpClientProductExampleComponent;
  let fixture: ComponentFixture<MyHttpClientProductExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHttpClientProductExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHttpClientProductExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
