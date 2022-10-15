import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-new-railway',
  templateUrl: './view-new-railway.component.html',
  styleUrls: ['./view-new-railway.component.css']
})
export class ViewNewRailwayComponent implements OnInit {

  constructor(private myApi:ApiService) {
    this.putRailData()
   }

  name1 = "Renji"
  name2 = "Sona"
  status = false

  railData:any

  putRailData=()=>{
    this.myApi.getRailData().subscribe(
      (data)=>{
        this.railData = data
      }
    )
  }

  changeValue=()=>{
    this.name1 = "Babu"
    this.name2 = "Sandhra"
    this.status = true
  }

  ngOnInit(): void {
  }

}
