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

  getProgress():number{
    return Math.random()
  }
}
