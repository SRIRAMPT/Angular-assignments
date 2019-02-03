import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  displayBtn: String = "Display Details" ;
  details = null ;
  userDetails = null ;
  list = [];
  
  onDisplayBtn() {
    if(this.displayBtn === "Display Details"){
      this.displayBtn = "Hide Details"
      this.details = "Hey this is "+this.userDetails+" !!!" ;
    }else{
      this.displayBtn = "Display Details"
      this.details = null ;
    }

    this.list.push(this.list.length + 1)
  }

  constructor() { }

  ngOnInit() {
  }

}
