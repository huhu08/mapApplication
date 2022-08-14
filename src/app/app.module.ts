import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SinglePinMapComponent } from './single-pin-map/single-pin-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SideNavBarComponent,
    SinglePinMapComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
