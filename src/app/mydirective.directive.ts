/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: henrytam
 * @Date: 2021-07-18 15:36:30
 * @LastEditors: henrytam
 * @LastEditTime: 2021-07-20 14:12:05
 */
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMydirective]',
})
export class MydirectiveDirective {
  // 自定义指令需要传参的时候，使用input注入变量
  @Input() appMydirective: any;
  el: any;
  // 注入ElementRef对象
  constructor(el: ElementRef) {
    console.log(el);
    this.el = el;
    // el.nativeElement就是dom节点
    // 自定义属性不需要传值时
    // el.nativeElement.style.color = '#234';
    // el.nativeElement.style.padding = '20px';
    // el.nativeElement.style.backgroundColor = '#800  ';
  }

  ngOnInit() {
    // 使用input对自定义指令进行动态传值
    if (this.appMydirective === '') {
      this.el.nativeElement.style.color = '#008';
      this.el.nativeElement.style.padding = '20px';
      this.el.nativeElement.style.backgroundColor = '#800';
    } else {
      console.log(this.appMydirective);
      this.el.nativeElement.style.color = this.appMydirective;
      this.el.nativeElement.style.padding = '20px';
      this.el.nativeElement.style.backgroundColor = this.appMydirective;
    }
  }
}
