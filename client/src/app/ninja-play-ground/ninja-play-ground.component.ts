
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { HttpService  } from '../http.service';


@Component({
  selector:  'ninja-play-ground',
  templateUrl: './ninja-play-ground.component.html',
  styleUrls: ['./ninja-play-ground.component.css']
})
export class NinjaPlayGroundComponent implements OnInit {
  @Input() ninjaInfo : Object; 
  
  private ninjaData : Object;
  private ninja_playGround :  object[];
  @Output() ninjaDataChange = new EventEmitter();
  @Output() ninjaDataChange2 = new EventEmitter();

  constructor(private _httpService: HttpService) {
  }

  ngOnInit(){
    
  }

  getSomeGold(play_ground_name){
    this._httpService.getGold(play_ground_name).subscribe(data=>{
    this.ninjaData = data ;
    this.ninjaDataChange.emit(this.ninjaData);
    console.log(data);
    })
  }
}