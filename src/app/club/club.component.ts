import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {

  clubs_array: any;
  club_info: any;

  constructor(private mainSer: MainServiceService) { }

  ngOnInit(): void {
    this.mainSer.get_clubs().subscribe(data => {
      this.clubs_array = data;
      console.log(this.clubs_array);
    })
  }

  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
    this.mainSer.get_club_info({"club_name": value}).subscribe(data => {
      this.club_info = data;
      console.log(this.club_info);
    })
}

}
