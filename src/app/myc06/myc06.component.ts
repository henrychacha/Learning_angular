/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: henrytam
 * @Date: 2021-07-17 17:06:18
 * @LastEditors: henrytam
 * @LastEditTime: 2021-07-17 19:34:46
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc06',
  templateUrl: './myc06.component.html',
  styleUrls: ['./myc06.component.sass'],
})
export class Myc06Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  emplist = [
    { name: '猪八戒', score: 23 },
    { name: '孙悟空', score: 12 },
    { name: '唐三藏', score: 89 },
    { name: '沙悟净', score: 75 },
  ];
}
