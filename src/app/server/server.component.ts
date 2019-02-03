import { Component, OnInit } from "@angular/core";
import { display } from "../display"
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'

})

export class serverComponent implements OnInit {
allowServer = false ;
serverName = " " ;
name = "sriram" ;
addElement = false;
listName = ['sriram', 'vishnu'] ;

constructor() {
setTimeout( () => {
    this.allowServer = true ;
},2000)
}

onServerClick() {
this.listName.push(this.name) ;
this.addElement = true ; 
this.serverName = this.name ;
}

onInputData(event: any) {
this.name = (<HTMLInputElement>event.target).value ;
}

ngOnInit() {
} 
}
//---------------------------------------------EXAMPLE-ASSIGNMENT-2--------------------------------------
// username: string = "";
// allowBtn = false;
// resetOnClick() {
//     this.username = null ;
// }




// ngOnInit() {
// } 
// }