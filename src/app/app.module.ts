import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;


import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ServiceComponent } from './service/service.component';
import { Test1Component } from './test1/test1.component';


@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    ServersComponent,
    ServiceComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
