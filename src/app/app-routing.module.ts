import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchReviewComponent } from './match-review/match-review.component';
import { MatchesComponent } from './matches/matches.component';

const routes: Routes = [
  {path: "matches", component: MatchesComponent},
  {path: 'match/:id/:homeTeam/:awayTeam', component: MatchReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
