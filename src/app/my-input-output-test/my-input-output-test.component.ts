/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: henrytam
 * @Date: 2021-07-20 14:24:22
 * @LastEditors: henrytam
 * @LastEditTime: 2021-07-20 15:16:05
 */
import { Component, OnInit } from '@angular/core';

// 这是这是一个父组件
@Component({
  selector: 'app-my-input-output-test',
  templateUrl: './my-input-output-test.component.html',
  styleUrls: ['./my-input-output-test.component.sass'],
})
export class MyInputOutputTestComponent implements OnInit {
  num: number = 123;
  age: number = 24;
  constructor() {}

  ngOnInit(): void {}
  myChangeNum(n: any) {
    console.log(n);
    this.num = n;
  }
}
