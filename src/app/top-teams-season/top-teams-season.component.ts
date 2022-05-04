import { Component, OnInit } from '@angular/core';
import { TopTeamsService } from '../top-teams.service';

@Component({
  selector: 'app-top-teams-season',
  templateUrl: './top-teams-season.component.html',
  styleUrls: ['./top-teams-season.component.css']
})
export class TopTeamsSeasonComponent implements OnInit {


  constructor(private topTeamsSer: TopTeamsService) { }
  top_teams_array: any;

  ngOnInit(): void {
    this.topTeamsSer.get_top_teams_by_season().subscribe(data => {
      this.top_teams_array = data;
      console.log(this.top_teams_array)
    })  }

}
