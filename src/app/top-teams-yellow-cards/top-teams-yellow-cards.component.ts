import { Component, OnInit } from '@angular/core';
import { TopTeamsService } from '../top-teams.service';

@Component({
  selector: 'app-top-teams-yellow-cards',
  templateUrl: './top-teams-yellow-cards.component.html',
  styleUrls: ['./top-teams-yellow-cards.component.css']
})
export class TopTeamsYellowCardsComponent implements OnInit {

  constructor(private topTeamsSer: TopTeamsService) { }
  top_teams_array: any;

  ngOnInit(): void {
    this.topTeamsSer.get_top_teams_by_yellow_cards().subscribe(data => {
      this.top_teams_array = data;
    })  }
}
