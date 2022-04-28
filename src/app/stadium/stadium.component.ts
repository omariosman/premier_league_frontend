import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.css']
})
export class StadiumComponent implements OnInit {
  stadiums_array: any;
  stadium_info: any;

  constructor(private mainSer: MainServiceService) { }

  ngOnInit(): void {
    this.mainSer.get_stadiums().subscribe(data => {
      this.stadiums_array = data;
      console.log(this.stadiums_array);
    })
  }

  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
    this.mainSer.get_stadium_info({"stadium_name": value}).subscribe(data => {
      this.stadium_info = data;
      console.log(this.stadium_info);
    })
}

}
