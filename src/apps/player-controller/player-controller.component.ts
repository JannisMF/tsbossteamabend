import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../Player";
import { ActivatedRoute } from '@angular/router';
import {PlayerDataService} from "../../services/player-data.service";

@Component({
  selector: 'app-player-controller',
  templateUrl: './player-controller.component.html',
  styleUrls: ['./player-controller.component.css']
})
export class PlayerControllerComponent implements OnInit {



  player?:Player
  constructor(private route:ActivatedRoute, private dataService:PlayerDataService) { }

  ngOnInit(): void {
    this.getPlayer()
  }
  getPlayer(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getPlayer(id).subscribe(player=>this.player=player)
  }

  changePlayer(style:number){
    if (this.player) {
      this.dataService.changePlayer(style, this.player)
    }
    this.getPlayer()
  }
}
