/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: henrytam
 * @Date: 2021-07-17 14:14:00
 * @LastEditors: henrytam
 * @LastEditTime: 2021-07-17 14:15:39
 */
// 这是一个测试文件，恶可以删除
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc04Component } from './myc04.component';

describe('Myc04Component', () => {
  let component: Myc04Component;
  let fixture: ComponentFixture<Myc04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


