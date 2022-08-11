import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {PinApiService} from '../pin-api.service';
@Component({
  selector: 'side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {

  constructor(private pinApi:PinApiService) {  }
pinList: any;
data:any;
  ngOnInit() {
    this.pinApi.getPins().subscribe(data=>{
      
      this.pinList = data;
    });

  }

}
