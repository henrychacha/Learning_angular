/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: henrytam
 * @Date: 2021-07-16 19:27:31
 * @LastEditors: henrytam
 * @LastEditTime: 2021-07-20 14:36:42
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Myc01Component } from './myc01';
import { Myc02Component } from './myc02.component';
import { Myc03Component } from './myc03/myc03.component';
import { Myc04Component } from './myc04/myc04.component';
import { Myc05Component } from './myc05/myc05.component';
import { Myc06Component } from './myc06/myc06.component';
import { Myc07NgifComponent } from './myc07-ngif/myc07-ngif.component';
import { Myc08NgswitchComponent } from './myc08-ngswitch/myc08-ngswitch.component';
import { Myc09DatabingdingComponent } from './myc09-databingding/myc09-databingding.component';
import { MydirectiveDirective } from './mydirective.directive';
import { MyTodolistComponent } from './my-todolist/my-todolist.component';
import { genderPipe } from './my-pipe.pipe';
import { LevelPipePipe } from './level-pipe.pipe';
import { Myc10ServiceComponent } from './myc10-service/myc10-service.component';
import { MyInputOutputTestComponent } from './my-input-output-test/my-input-output-test.component';
import { appMyChildComponent } from './my-input-output-test/my-child.component';

@NgModule({
  declarations: [
    AppComponent,
    Myc01Component,
    Myc02Component,
    Myc03Component,
    Myc04Component,
    Myc05Component,
    Myc06Component,
    Myc07NgifComponent,
    Myc08NgswitchComponent,
    Myc09DatabingdingComponent,
    MydirectiveDirective,
    MyTodolistComponent,
    genderPipe,
    LevelPipePipe,
    Myc10ServiceComponent,
    MyInputOutputTestComponent,
    appMyChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
