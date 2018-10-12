import { Component, Input, Output } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector:  'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ninja Gold Game !';
  ninjaData : Object[];
  ninjaMessages : string[];
  totalGoldValue : number;
  @Input() totalGold : number;
  playInfo : Object ;

  constructor(private _httpService: HttpService){
    this.getSomeGold();
  }

  getSomeGold(){
    this._httpService.getGold("all").subscribe(data=> {
      this.ninjaData = data['ninja_playGround'] ;
      this.ninjaMessages = data['messages'];
      this.totalGoldValue = data['total_Gold'];
     })
  }

  getDataFromChild(eventData){
    console.log(eventData);
    this.ninjaData = eventData['ninja_playGround'] ;
    this.ninjaMessages = eventData['messages'];
    this.totalGoldValue = eventData['total_Gold'];
    console.log("Total Gold" + this.totalGoldValue);
  }
  
}
