/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: henrytam
 * @Date: 2021-07-16 19:27:31
 * @LastEditors: henrytam
 * @LastEditTime: 2021-07-16 20:10:13
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// 引导启动
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
