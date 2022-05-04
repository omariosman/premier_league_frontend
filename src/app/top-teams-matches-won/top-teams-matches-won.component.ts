import { Component, OnInit } from '@angular/core';
import { TopTeamsService } from '../top-teams.service';

@Component({
  selector: 'app-top-teams-matches-won',
  templateUrl: './top-teams-matches-won.component.html',
  styleUrls: ['./top-teams-matches-won.component.css']
})
export class TopTeamsMatchesWonComponent implements OnInit {

  constructor(private topTeamsSer: TopTeamsService) { }
  top_teams_array: any;

  ngOnInit(): void {
    this.topTeamsSer.get_top_teams_by_matches_won().subscribe(data => {
      this.top_teams_array = data;
    })  }


}
