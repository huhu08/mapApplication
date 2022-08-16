import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { Router, ActivatedRoute, Params,Navigation, Route} from '@angular/router';

//import { pipeline } from 'stream';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  //map: Map;
  map: mapboxgl.Map ;
  constructor(public route:Router) { }

  

  ngOnInit() {

    (mapboxgl as any).accessToken = environment.mapboxkey;
    this.map = new mapboxgl.Map({
    container: 'mapbox-map', // container ID
    style: 'https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=CH1cYDfxBV9ZBu1lHGqh', // style URL
    center: [-95.601961, 29.68039], // starting position
    zoom: 11.38 // starting zoom
    
    });

    
   this.map.addControl(new mapboxgl.NavigationControl());
    // this.createPin(-97.360138,32.697651);
    // this.createPin(-97.349082,32.715501);  
    this.createPin(-95.563694,29.687847);  
    this.createPin(-95.563184,29.68572);
    this.createPin(-95.6092,29.718855);
    this.createPin(-95.601961,29.68039);

  
  }
  routeToPinMap(longitude: number,latitude:number) {
    this.route.navigate(['/pin-Map/' ,longitude,latitude]);
  }

  createPin(lng:number,lat:number){
      const  marker = new mapboxgl.Marker({
        color: "#000000",
        draggable: true,
        clickTolerance:1
      }).setLngLat([lng,lat])
        .addTo(this.map);
        

        marker.on('click',()=>{
          
          new mapboxgl.Popup()
          .setLngLat([lng,lat])
          .addTo(this.map);
          console.log(marker.getLngLat());
          this.routeToPinMap(lng,lat);
        })
  
  }
}
  
 

