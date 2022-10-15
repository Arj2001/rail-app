import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-railway',
  templateUrl: './view-railway.component.html',
  styleUrls: ['./view-railway.component.css']
})
export class ViewRailwayComponent implements OnInit {

  constructor() { }

  name="Arjun"
  changeName=()=>{
    this.name = "Raju"
  }

  ngOnInit(): void {
  }

}
