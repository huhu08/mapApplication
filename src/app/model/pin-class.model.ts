export class PinClass {
private listId:number;
private propertyId:number;
private name:string;
public longitude:number;
public latitude:number;

constructor(listId:number,propertyId:number,name:string,longitude:number,latitude:number){
    this.listId=listId;
    this.propertyId=propertyId;
    this.name=name;
    this.longitude=longitude;
    this.latitude=latitude;

}
getName():string {
return this.name;
}
getGoeCode():any {
    return ['GeoCodes (', this.longitude ,this.latitude,')'];
    }

}
