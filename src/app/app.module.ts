import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayerDashboardComponent } from '../apps/player-dashboard/player-dashboard.component';
import { PlayerComponent } from '../apps/player/player.component';
import { ProgressBarComponent } from '../apps/progress-bar/progress-bar.component';
import { MatProgressBarModule} from "@angular/material/progress-bar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ProgressBarModule} from "angular-progress-bar";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbProgressbarModule} from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from './app-routing.module';
import {PlayerControllerComponent} from "../apps/player-controller/player-controller.component";



// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    PlayerDashboardComponent,
    PlayerComponent,
    ProgressBarComponent,
    PlayerControllerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    ProgressBarModule,
    NgbModule,
    NgbProgressbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
