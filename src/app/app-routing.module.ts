import { NgModule } from '@angular/core';
import {  Routes ,RouterModule} from '@angular/router';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { SinglePinMapComponent } from './single-pin-map/single-pin-map.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'side-nav-bar', component: SideNavBarComponent },
  
  { path: 'pin-Map/:longitude/:latitude', component: SinglePinMapComponent},
  { path: 'pin-Map/:name/:longitude/:latitude', component: SinglePinMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
