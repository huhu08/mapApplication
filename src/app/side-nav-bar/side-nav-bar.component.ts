import { Component, OnInit } from '@angular/core';
//import {MatSidenavModule} from '@angular/material/sidenav'; 
import {PinApiService} from '../pin-api.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { PinClass } from '../model/pin-class.model';
@Component({
  selector: 'side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {

  constructor(private route: Router,private pinApi:PinApiService) {  }
  pinList: any;
  data:any;
  ngOnInit() {
    // this.pinApi.getPins().subscribe(data=>{
    //   console.log('nav-bar-api-data=',data);
    //   this.pinList = data;
    //   console.log('nav-bar-api-data=',this.pinList);
    // });
    }
   // Added Pin points info manually
    pins:PinClass[] =[
      new PinClass(5638557,70275,'Arrowood',-95.563694,29.687847),
      new PinClass(5638557,70284,'Ashford Court',-95.6092,29.718855),
      new PinClass(5638557,70681,'Bristol Court',-95.563184,29.68572),
      new PinClass(5638557,70737,'Plaza Azul',-95.601961,29.68039),
    
    ]
    routeToPinMap(name:string,longitude: number,latitude:number) {
    this.route.navigate(['/pin-Map/' ,name,longitude,latitude]);
  }

  }


