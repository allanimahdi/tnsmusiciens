import { Component, OnInit } from '@angular/core';
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums"; // used to describe at what accuracy the location should be get
import { Observable } from 'data/observable';

@Component({
  moduleId: module.id,
  selector: 'app-lieu',
  templateUrl: './lieu.component.html',
  styleUrls: ['./lieu.component.scss']
})
export class LieuComponent extends Observable {

  constructor(){
        super();

    }

    lat = "";
    lon = "";
    speed = "";
    addr = "";

    getLocation(args): void {
        geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 })
            .then(res => {
                this.set("lat", res.latitude);
                this.set("lon", res.longitude);
                this.set("speed", res.speed);
                // get the address (REQUIRES YOUR OWN GOOGLE MAP API KEY!)
                fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + res.latitude + "," + res.longitude + "&key=AIzaSyAHXRKEBZ4f0Lq74lYuTYaSkY1BrWCY4nMY")
                    .then((response) => response.json()).then((r) => {
                    this.set("addr", r.results[0].formatted_address);
                });
            });
        console.log("hola hola");
    }


}
