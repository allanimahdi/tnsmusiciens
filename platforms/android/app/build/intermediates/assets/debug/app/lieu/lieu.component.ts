import { Component, OnInit } from '@angular/core';
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums"; // used to describe at what accuracy the location should be get

@Component({
  moduleId: module.id,
  selector: 'app-lieu',
  templateUrl: './lieu.component.html',
  styleUrls: ['./lieu.component.scss']
})
export class LieuComponent implements OnInit {

  constructor() { }

  public AllowPosition(){
      geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 })

      console.log(geolocation);
  }

  ngOnInit() { }


}
