import { InterpolationConfig } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc07-ngif',
  templateUrl: './myc07-ngif.component.html',
  styleUrls: ['./myc07-ngif.component.sass'],
})
export class Myc07NgifComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  flag = true;
  age = 19;
  // age = 12
  myChangeStyle = {
    color: 'red',
    fontSize: '40px',
    'font-style': 'italic',
  };
  originStyle = JSON.parse(JSON.stringify(this.myChangeStyle));

  objClass = {
    btn : true,
    btnClassGreen : true,
    btnClassBlue : false
  }


  changeAge() {
    this.age >= 18 ? (this.age = 12) : (this.age = 19);
  }
  changeColor() {
    let newStyle = JSON.parse(JSON.stringify(this.myChangeStyle));
    newStyle.color = 'yellow';
    newStyle['fontSize'] = '12px';
    newStyle['font-style'] = 'normal';
    if (this.flag) {
      this.myChangeStyle = newStyle;
    } else {
      this.myChangeStyle = this.originStyle;
    }
    this.flag = !this.flag;
  }
  changeClass(){
    this.objClass.btnClassBlue = true;
    this.objClass.btnClassGreen = false

  }
}
