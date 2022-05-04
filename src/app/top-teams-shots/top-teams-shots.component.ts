import { Component, OnInit } from '@angular/core';
import { TopTeamsService } from '../top-teams.service';


@Component({
  selector: 'app-top-teams-shots',
  templateUrl: './top-teams-shots.component.html',
  styleUrls: ['./top-teams-shots.component.css']
})
export class TopTeamsShotsComponent implements OnInit {

  constructor(private topTeamsSer: TopTeamsService) { }
  top_teams_array: any;

  ngOnInit(): void {
    this.topTeamsSer.get_top_teams_by_matches_won().subscribe(data => {
      this.top_teams_array = data;
    })  }

}
