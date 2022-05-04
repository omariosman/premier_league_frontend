import { Component, OnInit } from '@angular/core';
import { TopTeamsService } from '../top-teams.service';
@Component({
  selector: 'app-top-teams-home-matches-won',
  templateUrl: './top-teams-home-matches-won.component.html',
  styleUrls: ['./top-teams-home-matches-won.component.css']
})
export class TopTeamsHomeMatchesWonComponent implements OnInit {
  top_teams_array: any;

  constructor(private topTeamsSer: TopTeamsService) { }

  ngOnInit(): void {
    this.topTeamsSer.get_top_teams_by_home_matches_won().subscribe(data => {
      this.top_teams_array = data;
    })  }
}


