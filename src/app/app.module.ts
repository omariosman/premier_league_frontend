import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchesComponent } from './matches/matches.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatchReviewComponent } from './match-review/match-review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowMatchReviewComponent } from './show-match-review/show-match-review.component';
import { InsertFanComponent } from './insert-fan/insert-fan.component';
import { NationalityComponent } from './nationality/nationality.component';
import { ClubComponent } from './club/club.component';
import { PlayerComponent } from './player/player.component';
import { StadiumComponent } from './stadium/stadium.component';
import { PlayersWithPositionComponent } from './players-with-position/players-with-position.component';
import { TopTeamsComponent } from './top-teams/top-teams.component';
import { TopTeamsMatchesWonComponent } from './top-teams-matches-won/top-teams-matches-won.component';
import { TopTeamsHomeMatchesWonComponent } from './top-teams-home-matches-won/top-teams-home-matches-won.component';
import { TopTeamsYellowCardsComponent } from './top-teams-yellow-cards/top-teams-yellow-cards.component';
import { TopTeamsFoulsComponent } from './top-teams-fouls/top-teams-fouls.component';
import { TopTeamsShotsComponent } from './top-teams-shots/top-teams-shots.component';
import { TopTeamsSeasonComponent } from './top-teams-season/top-teams-season.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    MatchReviewComponent,
    ShowMatchReviewComponent,
    InsertFanComponent,
    NationalityComponent,
    ClubComponent,
    PlayerComponent,
    StadiumComponent,
    PlayersWithPositionComponent,
    TopTeamsComponent,
    TopTeamsMatchesWonComponent,
    TopTeamsHomeMatchesWonComponent,
    TopTeamsYellowCardsComponent,
    TopTeamsFoulsComponent,
    TopTeamsShotsComponent,
    TopTeamsSeasonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
