import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private _httpCLient:HttpClient) { }
  getphotos():Observable<any>{
    return this._httpCLient.get("https://api.imgflip.com/get_memes")
  }
}
 