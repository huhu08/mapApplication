import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { Router, ActivatedRoute, ParamMap,Navigation } from '@angular/router';

@Component({
  selector: 'single-pin-map',
  templateUrl: './single-pin-map.component.html',
  styleUrls: ['./single-pin-map.component.css']
})
export class SinglePinMapComponent implements OnInit {
  
  map: mapboxgl.Map;
  longitude:number ;
  latitude:number ;
  pinName: string;
  constructor(private route: ActivatedRoute) {
   this.longitude= this.route.snapshot.params['longitude'];
   this.latitude=this.route.snapshot.params['latitude'];
   this.pinName=this.route.snapshot.params['name'];
    // this.route.snapshot.paramMap.get(longitude);
   // this.route.snapshot.paramMap.get(latitude);
console.log('console.log',this.longitude,this.latitude);
   }
   

  ngOnInit() {
    
    (mapboxgl as any).accessToken = environment.mapboxkey;
    this.map = new mapboxgl.Map({
    container: 'mapbox-pin-map', // container ID
    style: 'https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=CH1cYDfxBV9ZBu1lHGqh', // style URL
    center: [this.longitude,this.latitude], // starting position
    zoom: 16// starting zoom
    
    });
   // this.map.resize();
    this.map.addControl(new mapboxgl.NavigationControl());
   
    this.createPin(this.longitude,this.latitude);  

  }
 


  createPin(lng:number,lat:number){
    //const lngLat = popup.getLngLat();
      const  marker = new mapboxgl.Marker({
        color: "#000000",
        draggable: true
      }).setLngLat([lng,lat])
    .setPopup(new mapboxgl.Popup().setText(this.pinName))
        .addTo(this.map);
  }

}
