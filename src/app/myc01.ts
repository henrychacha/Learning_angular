/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: henrytam
 * @Date: 2021-07-16 20:42:15
 * @LastEditors: henrytam
 * @LastEditTime: 2021-07-17 13:36:24
 */

import { Component } from "@angular/core";

// 装饰器，（decorator）用于指定class的用途,装饰器的本质是函数
@Component({
    template:'<h2>我的组件</h2><div class="app-myc02"></div>',
    selector:'myc01', // 这里的写法很多元，是作为一种选择器，如果视图出口是标签的形式，是属性的形式或者是类的形式，都不一样。比如.myc01,myc01,[myc01]

})
export class Myc01Component{
    
}

// angular可以允许把组件的模板样式都写在一个文件里，也可以允许把模板样式和脚本拆开写，而vue只能写在一个文件里