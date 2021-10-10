/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: henrytam
 * @Date: 2021-07-19 12:57:32
 * @LastEditors: henrytam
 * @LastEditTime: 2021-07-20 10:48:34
 */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { logService } from '../log.service';

@Component({
  selector: 'app-myc10-service',
  templateUrl: './myc10-service.component.html',
  styleUrls: ['./myc10-service.component.sass'],
})
export class Myc10ServiceComponent {
  // let log = null
  logDeclare: any = null; // 前面不要let, 需要加上类型any
  httpDeclare: HttpClient;
  constructor(log: logService, http: HttpClient) {
    //声明依赖

    this.logDeclare = log;
    this.httpDeclare = http;
    console.log(this.httpDeclare);
  }
  sendrequest() {
    // 使用注入进来的httpclient 实例发送异步请求
    this.httpDeclare
      .get(
        'https://www.fastmock.site/mock/f9978dfb07c199773f7beac1f2150263/api-test_mock/api/testmock'
      )
      // .then((res: any) => { // 没有
      //   console.log(res);
      // })
      .subscribe((res: any) => {
        console.log(res);
      });
  }
  del() {
    let action = '删除项目';
    this.logDeclare.doLog(action); // 使用服务对象注入的方法（依赖注入），构建对象，
  }
  add() {
    let action = '添加项目';
    new logService().doLog(action); // 原始的方法
  }
}
