import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayerDashboardComponent } from '../apps/player-dashboard/player-dashboard.component';
import { PlayerComponent } from '../apps/player/player.component';
import { ProgressBarComponent } from '../apps/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerDashboardComponent,
    PlayerComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
