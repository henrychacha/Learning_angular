/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: henrytam
 * @Date: 2021-07-20 14:27:31
 * @LastEditors: henrytam
 * @LastEditTime: 2021-07-20 15:16:53
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// 这是一个子组件
@Component({
  selector: 'app-my-child',
  template: `<h1>这是子组件{{ num }}</h1>
    <p>{{ name }}</p>
    <p>年龄{{ childAge }}-{{ age }}</p>
    <button (click)="changeNum(18)">触发父元素的事件</button> `,
})
export class appMyChildComponent implements OnInit {
  // 父组件向子组件传递自己定义属性，相当于props
  @Input() num?: number; // 问号不能少

  // 子组件向父组件传值，利用父组件传入子组件的自定义事件
  @Output() myChangeNum = new EventEmitter();

  // 解决重名问题
  age = 12;
  @Input('age') childAge?: number; // 括号里的是父组件传入的名字，改成后面的名字;对于自定义事件同样适用

  name = 'henry';
  constructor() {}

  ngOnInit() {}
  changeNum(i: number) {
    this.myChangeNum.emit(i); // payload传参
  }
}
