import { Injectable } from '@angular/core';
import {Player} from "../Player";
import {PLAYERS} from "./mock-players";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  constructor() { }

  getPlayers():Observable<Player[]>{
    return of(PLAYERS)
  }

  getPlayer(id:number){

  }

  getProgress():Observable<number>{
    return of(Math.random()*100)
  }

  changePlayer(style:number,player:Player){

  }
}
