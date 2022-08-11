import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PinApiService {

  constructor(private httpClient: HttpClient) { 

    
  }
  public getPins(){
return this.httpClient.get("https://app.smartapartmentdata.com/List/json/propertyItem.aspx?listID=5363950&token=5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E&propertyID=76519");
  
  }
}
