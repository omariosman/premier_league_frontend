import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertFanComponent } from './insert-fan/insert-fan.component';
import { MatchReviewComponent } from './match-review/match-review.component';
import { MatchesComponent } from './matches/matches.component';
import { ShowMatchReviewComponent } from './show-match-review/show-match-review.component';

const routes: Routes = [
  {path: "matches", component: MatchesComponent},
  {path: 'match/:id/:homeTeam/:awayTeam', component: MatchReviewComponent},
  {path: 'show_match_review/:id/:homeTeam/:awayTeam', component: ShowMatchReviewComponent},
  {path: 'insert_fan', component: InsertFanComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
