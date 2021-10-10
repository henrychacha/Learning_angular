/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: henrytam
 * @Date: 2021-07-18 17:03:56
 * @LastEditors: henrytam
 * @LastEditTime: 2021-07-18 17:23:48
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-todolist',
  templateUrl: './my-todolist.component.html',
  styleUrls: ['./my-todolist.component.sass'],
})
export class MyTodolistComponent {
  constructor() {}
  todoList = ['读书', '写字', '散步', '看电影'];
  additem = '';
  add() {
    this.todoList.push(this.additem);
    this.additem = '';
  }
  remove(i: number) {
    this.todoList.splice(i, 1);
  }
}
