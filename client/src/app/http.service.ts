import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient : HttpClient) { }

  getGold(path){
    return this._httpClient.get(path);
  }
}
