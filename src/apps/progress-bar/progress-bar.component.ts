import { Component, OnInit } from '@angular/core';
import {PlayerDataService} from "../../services/player-data.service";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  progress:number=0.5

  constructor(private dataService:PlayerDataService) {
    this.getProgress()
  }

  ngOnInit(): void {
  }
  getProgress(){
    this.dataService.getProgress().subscribe(prog=>this.progress=prog)
  }
  sendPRogress():number{
    return this.progress;
  }
}
