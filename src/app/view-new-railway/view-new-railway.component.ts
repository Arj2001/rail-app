import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-new-railway',
  templateUrl: './view-new-railway.component.html',
  styleUrls: ['./view-new-railway.component.css']
})
export class ViewNewRailwayComponent implements OnInit {

  constructor() { }

  name1 = "Renji"
  name2 = "Sona"
  status = false

  changeValue=()=>{
    this.name1 = "Babu"
    this.name2 = "Sandhra"
    this.status = true
  }

  ngOnInit(): void {
  }

}
