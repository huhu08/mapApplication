import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SideNavBarComponent,
    
  ],
  imports: [
    BrowserModule,
    MatSidenavModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
