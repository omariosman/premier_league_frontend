import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubComponent } from './club/club.component';
import { InsertFanComponent } from './insert-fan/insert-fan.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { MatchReviewComponent } from './match-review/match-review.component';
import { MatchesComponent } from './matches/matches.component';
import { NationalityComponent } from './nationality/nationality.component';
import { PlayerComponent } from './player/player.component';
import { PlayersWithPositionComponent } from './players-with-position/players-with-position.component';
import { ShowMatchReviewComponent } from './show-match-review/show-match-review.component';
import { StadiumComponent } from './stadium/stadium.component';
import { TopTeamsFoulsComponent } from './top-teams-fouls/top-teams-fouls.component';
import { TopTeamsHomeMatchesWonComponent } from './top-teams-home-matches-won/top-teams-home-matches-won.component';
import { TopTeamsMatchesWonComponent } from './top-teams-matches-won/top-teams-matches-won.component';
import { TopTeamsSeasonComponent } from './top-teams-season/top-teams-season.component';
import { TopTeamsShotsComponent } from './top-teams-shots/top-teams-shots.component';
import { TopTeamsYellowCardsComponent } from './top-teams-yellow-cards/top-teams-yellow-cards.component';
import { TopTeamsComponent } from './top-teams/top-teams.component';

const routes: Routes = [
  {path: "", component: MainComponentComponent},
  {path: "matches", component: MatchesComponent},
  {path: 'match/:id/:homeTeam/:awayTeam', component: MatchReviewComponent},
  {path: 'show_match_review/:id/:homeTeam/:awayTeam', component: ShowMatchReviewComponent},
  {path: 'insert_fan', component: InsertFanComponent},
  {path: 'nationality', component: NationalityComponent},
  {path: 'clubs', component: ClubComponent},
  {path: 'players', component: PlayerComponent},
  {path: 'stadiums', component: StadiumComponent},
  {path: 'player_with_position', component: PlayersWithPositionComponent},
  {path: 'top_teams', component: TopTeamsComponent},
  {path: 'top_teams_matches_won', component: TopTeamsMatchesWonComponent},
  {path: 'top_teams_home_matches_won', component: TopTeamsHomeMatchesWonComponent},
  {path: 'top_teams_yellow_cards', component: TopTeamsYellowCardsComponent},
  {path: 'top_teams_shots', component: TopTeamsShotsComponent},
  {path: 'top_teams_fouls', component: TopTeamsFoulsComponent},
  {path: 'top_teams_season', component: TopTeamsSeasonComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
