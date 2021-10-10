/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: henrytam
 * @Date: 2021-07-18 20:42:41
 * @LastEditors: henrytam
 * @LastEditTime: 2021-07-18 21:01:36
 */

import { Pipe } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class genderPipe {
  // 一个固定的转换函数transform
  transform(val: any, lang = 'en', who = 0) {
    if (!who) {
      switch (val) {
        case 0:
          return lang == 'zh' ? '男' : 'male';
          break;
        case 1:
          return lang == 'zh' ? '女' : 'female';
          break;
        default:
          return lang == 'zh' ? '未知' : 'unknown';
      }
    } else {
      return '不告诉你';
    }
  }
}
