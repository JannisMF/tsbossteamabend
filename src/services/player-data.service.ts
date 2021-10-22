import { Injectable } from '@angular/core';
import {Player} from "../Player";
import {PLAYERS} from "./mock-players";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  players:Player[]=PLAYERS
  constructor() { }

  getPlayers():Observable<Player[]>{
    return of(this.players)
  }

  getPlayer(id:number):Observable<Player>{
   let player =this.players.find(h => h.id === id)
    if (player!= undefined){
      return of(player)
    }
      return of({id:1,lives:0,saturation:10,shield:0})
  }

  getProgress():Observable<number>{
    return of(Math.random()*100)
  }

  changePlayer(style:number,player:Player){
   let i= this.players.indexOf(player)
    if (style==1){
      if (this.players[i].shield>0){
        this.players[i]=player
      }
      else if(this.players[i].lives>0) {
        this.players[i].lives--
      }

    }
    else if(style==2){
      if (this.players[i].lives<10){
       this.players[i].lives++
      }
    }
    else if (style==3){
      if (this.players[i].saturation>0){
        this.players[i].saturation--
      }
      else{
        this.changePlayer(1,player)
      }
    }
    else if (style==4){
      if (this.players[i].saturation<10){
        this.players[i].saturation++
      }
    }
    else if (style==5){
      if (this.players[i].shield<10){
        this.players[i].shield++
      }
    }
  }
}
