import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  constructor(private mainSer: MainServiceService) { }

  all_matches: any;

  ngOnInit(): void {
    this.get_all_matches();
  }

  get_all_matches(){
    this.mainSer.get_all_matches().subscribe(data => {
      this.all_matches = data;
      console.log("matches: ", this.all_matches);
    });
  }




}
