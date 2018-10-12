import { Component, OnInit, Input } from '@angular/core';
//import { Object } from './ninja-activity.component';
@Component({
  selector: 'app-ninja-activity',
  templateUrl: './ninja-activity.component.html',
  styleUrls: ['./ninja-activity.component.css']
})
export class NinjaActivityComponent implements OnInit {
  @Input()
  ninjaInfoHistory: string;

  constructor() { }
  ngOnInit() {
  }
}