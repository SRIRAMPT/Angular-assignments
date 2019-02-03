import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
  .online {
    color: white ;
  }
  .offline {
    color: white ;
  }
  `]
})
export class ServersComponent implements OnInit {
  serverId:number = 10 ;
  serverStatus:string = "offline" ;
  serverAllow = false ; 

  getServerStatus() {
    return this.serverStatus ;
  }

  constructor() { 
    this.serverStatus = Math.random() >0.5 ? "online" : "offline" ; 
  }

  getColor() {
    if(this.serverStatus == "offline")
    return "red";
    else
    return "green"; 
  }

  getStatus() {
    if(this.serverStatus === "offline")
    return this.serverAllow = true ;
  }

  ngOnInit() {
  }

}
