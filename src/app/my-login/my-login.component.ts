import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.sass']
})
export class MyLoginComponent implements OnInit {

  time:TimerService 
  constructor(time:TimerService) { 
    this.time = time;
    console.log(time);
  }

  doLogin(){
    this.time.start()
    this.time.end('login')
    // console.log('start submitting Login information to service')
    // console.log('response login success')
  }
  doRegister(){
    this.time.start()
    this.time.end("register")
    // console.log('start submitting Register information to service')
    // console.log('response register success')
  }

  ngOnInit(): void {
  }

}
