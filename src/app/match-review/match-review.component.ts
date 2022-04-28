import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormGroupDirective } from '@angular/forms';
import { MatchReviewInterface } from './match-review-interface'; 
import { MainServiceService } from '../main-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-review',
  templateUrl: './match-review.component.html',
  styleUrls: ['./match-review.component.css']
})
export class MatchReviewComponent implements OnInit {
  isSubmitted: boolean;
  isValid: boolean;
  clickedSend: boolean;
  match_date: any;
  home_team: any;
  away_team: any;

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    review: new FormControl('', Validators.required),
  });

  submission = {} as MatchReviewInterface;


  constructor(private mainSer: MainServiceService, private route: ActivatedRoute) { 
    this.isSubmitted = false;
    this.isValid = true;
    this.clickedSend = false;
  }

  ngOnInit(): void {
    this.match_date = this.route.snapshot.paramMap.get('id');
    this.home_team = this.route.snapshot.paramMap.get('homeTeam');
    this.away_team = this.route.snapshot.paramMap.get('awayTeam');
  }


  onSubmit() {
    this.clickedSend = true;
    this.form.markAllAsTouched();
    this.isValid = true;
    if (this.form.valid) {
      this.clickedSend = false;
      this.formResultRow();
      this.recordResult();
    } else {
      this.isValid = false;
    }
  }


  
  recordResult() {
    console.log("tst", this.submission);
    this.mainSer.recordResult(this.submission).subscribe(data => {
      this.form.reset();
      this.isSubmitted = true;
      //document.getElementById('form-body-id').setAttribute('style','display:none');


      setTimeout(() => {
        this.isSubmitted = false;
        //document.getElementById('form-body-id').setAttribute('style','display:block');
      }, 3000);
    });
  }

  formResultRow() {
    this.submission.username = this.form.get('username')?.value;
    this.submission.rating = this.form.get('rating')?.value;
    this.submission.review = this.form.get('review')?.value;
    this.submission.match_date = this.match_date;
    this.submission.home_team = this.home_team;
    this.submission.away_team = this.away_team;

  } 

}



