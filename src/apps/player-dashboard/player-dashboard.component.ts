import { Component, OnInit } from '@angular/core';
import {Player} from "../../Player";
import {PlayerDataService} from "../../services/player-data.service";

@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.css']
})
export class PlayerDashboardComponent implements OnInit {
  players:Player[]=[]
  constructor(private dataService:PlayerDataService) {
    this.getPlayers()
  }

  ngOnInit(): void {
  }

  getPlayers(){
    this.dataService.getPlayers().subscribe(players=>this.players=players)
  }
}
