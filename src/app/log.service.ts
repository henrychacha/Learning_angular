/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: henrytam
 * @Date: 2021-07-19 13:08:46
 * @LastEditors: henrytam
 * @LastEditTime: 2021-07-19 13:41:25
 */

import { Injectable } from '@angular/core';

// 注入service，服务对象，当前改服务对象可被注入
@Injectable({
  providedIn: 'root', //指定当前服务对象在根模块中提供---AppModule ,王健林
})
export class logService {
  // 法拉利
  // 执行日志功能
  doLog(action: string) {
    let name = 'henry';
    console.log(`${action}时间是${new Date().getTime()},操作人是${name}`);
  }
}
