import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PinApiService {

  constructor(private httpClient: HttpClient) { 

    
  }
  public getPins(){
return this.httpClient.get("https://app.smartapartmentdata.com/List/json/listItems.aspx?listID=5638557&token=A0E2523B25B805CBB6F8EC9D98AF56457EE7A255&receipt=undefined");
  
  }
}
