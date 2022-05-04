import { Component, OnInit } from '@angular/core';
import { TopTeamsService } from '../top-teams.service';

@Component({
  selector: 'app-top-teams-fouls',
  templateUrl: './top-teams-fouls.component.html',
  styleUrls: ['./top-teams-fouls.component.css']
})
export class TopTeamsFoulsComponent implements OnInit {

  constructor(private topTeamsSer: TopTeamsService) { }
  top_teams_array: any;

  ngOnInit(): void {
    this.topTeamsSer.get_top_teams_by_fouls().subscribe(data => {
      this.top_teams_array = data;
    })  }

}
