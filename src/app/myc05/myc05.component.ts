/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: henrytam
 * @Date: 2021-07-17 14:19:15
 * @LastEditors: henrytam
 * @LastEditTime: 2021-07-17 16:59:58
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc05',
  templateUrl: './myc05.component.html',
  styleUrls: ['./myc05.component.sass']
})
export class Myc05Component{
// mvvm 中的model数据层
 name = 'henry';
 age = 24;
  reduce(){

    this.age >0?this.age--:null;
  }
  add(){
    this.age++
  }
}
