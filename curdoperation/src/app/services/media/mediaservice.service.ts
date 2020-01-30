import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL = "http://localhost:3000/media";
@Injectable({
  providedIn: 'root'
})
export class MediaserviceService {

  constructor(public http : HttpClient) { }
  getAllMedia(){
    return this.http.get(API_URL);
  }
  getOneProduct(id:number){
    return this.http.get(API_URL + "/" + id);
  }
}
