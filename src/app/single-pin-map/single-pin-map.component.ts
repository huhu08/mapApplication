import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'single-pin-map',
  templateUrl: './single-pin-map.component.html',
  styleUrls: ['./single-pin-map.component.css']
})
export class SinglePinMapComponent implements OnInit {
  map: mapboxgl.Map;
  constructor() { }

  ngOnInit() {
    (mapboxgl as any).accessToken = environment.mapboxkey;
    this.map = new mapboxgl.Map({
    container: 'mapbox-pin-map', // container ID
    style: 'https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=CH1cYDfxBV9ZBu1lHGqh', // style URL
    center: [-95.601961, 29.68039], // starting position
    zoom: 10.38 // starting zoom
    
    });
    this.map.addControl(new mapboxgl.NavigationControl());
   
    this.createPin(-95.563694,29.687847);  
  }

  createPin(lng:number,lat:number){
    //const lngLat = popup.getLngLat();
      const  marker = new mapboxgl.Marker({
        color: "#000000",
        draggable: true
      }).setLngLat([lng,lat])
     // .setPopup(new mapboxgl.Popup().setText('pins'))
        .addTo(this.map);
  }

}
