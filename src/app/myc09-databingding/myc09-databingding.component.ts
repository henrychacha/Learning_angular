/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: henrytam
 * @Date: 2021-07-18 14:01:48
 * @LastEditors: henrytam
 * @LastEditTime: 2021-07-20 14:18:50
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc09-databingding',
  templateUrl: './myc09-databingding.component.html',
  styleUrls: ['./myc09-databingding.component.sass'],
})
export class Myc09DatabingdingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  uname = 'henrytam';
  gender = 0;
  // 主动监听model的变化
  changeModel(e: any) {
    console.log(this.uname);
    console.log(123, e.target?.value);
    console.log(e); // 输入view中实时输入的内容
    this.uname = e;
  }
  changeModelByChange(e: any) {
    this.uname = e.target?.value;
  }
}
