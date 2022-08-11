import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
//import { pipeline } from 'stream';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  //map: Map;
  map: mapboxgl.Map;
  constructor() { }

  

  ngOnInit() {

    (mapboxgl as any).accessToken = environment.mapboxkey;
    this.map = new mapboxgl.Map({
    container: 'mapbox-map', // container ID
    style: 'https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=CH1cYDfxBV9ZBu1lHGqh', // style URL
    center: [21.81095, -42.68262], // starting position
    zoom: 1.38 // starting zoom
    
    });
    
   this.map.addControl(new mapboxgl.NavigationControl());
    this.createPin(-74.5,40);

  
  }

  createPin(lng:number,lat:number){
    
      const  marker = new mapboxgl.Marker({
        color: "#000000",
        draggable: true
      }).setLngLat([lng,lat])
        .addTo(this.map);
       

        marker.on('click',()=>{
          new mapboxgl.Popup()
          .setLngLat([lng,lat])
          .addTo(this.map);
          console.log(marker.getLngLat());
        })
  
  }
}
  
 

