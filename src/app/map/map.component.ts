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
  map: mapboxgl.Map ;
  constructor() { }

  

  ngOnInit() {

    (mapboxgl as any).accessToken = environment.mapboxkey;
    this.map = new mapboxgl.Map({
    container: 'mapbox-map', // container ID
    style: 'https://api.maptiler.com/maps/openstreetmap/style.json?key=Xxyh4InI4X6dijTefWMP', // style URL
    center: [2.86559, 22.80535], // starting position
    zoom: 0.74 // starting zoom
    
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
        marker.on('drag',()=>{
          console.log(marker.getLngLat());
        })
  
  // }
  // this.map.on('click', (e) => {
  //   var coords = `lat: ${e.lngLat.lat}  lng: ${e.lngLat.lng}`;

  //   // create the popup
  //   var popup = new mapboxgl.Popup().setText(coords);

  //   // create DOM element for the marker
  //   var el = document.createElement('div');
  //   el.id = 'marker';

  //   // create the marker
  //   new mapboxgl.Marker(el)
  //       .setLngLat(e.lngLat)
  //       .setPopup(popup)
  //       .addTo(this.map);
  // });
}}
