import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

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
  getColor(item){
    if(item > 4){
      return "blue" ;
    }
  }

  getDetails(){
    this.userDetails = (<HTMLInputElement>event.target).value ;
  }

  constructor() { 
  }

  ngOnInit() {
  }

}
