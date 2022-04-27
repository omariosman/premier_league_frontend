import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainServiceService } from '../main-service.service';

import { ShowMatchReviewInterface } from './show-match-review-interface';

@Component({
  selector: 'app-show-match-review',
  templateUrl: './show-match-review.component.html',
  styleUrls: ['./show-match-review.component.css']
})
export class ShowMatchReviewComponent implements OnInit {
  match_date: any;
  home_team: any;
  away_team: any;

  match_rev : any;

  matches_reviews: any;

  constructor(private mainSer: MainServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.match_date = this.route.snapshot.paramMap.get('id');
    this.home_team = this.route.snapshot.paramMap.get('homeTeam');
    this.away_team = this.route.snapshot.paramMap.get('awayTeam');


    this.match_rev = {
      "match_date" : this.match_date,
      "home_team" : this.home_team,
      "away_team" : this.away_team,
    }

    this.mainSer.show_match_review(this.match_rev).subscribe( data=> {
      this.matches_reviews = data;
      console.log(this.matches_reviews);
    })
  }

}
