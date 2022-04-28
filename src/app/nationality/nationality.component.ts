import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
@Component({
  selector: 'app-nationality',
  templateUrl: './nationality.component.html',
  styleUrls: ['./nationality.component.css']
})
export class NationalityComponent implements OnInit {
  nationality_array: any;
  players_info: any;
  
  constructor(private mainSer: MainServiceService) { }

  ngOnInit(): void {
    this.mainSer.get_nationality().subscribe(data => {
      this.nationality_array = data;
      console.log(this.nationality_array);
    })
  }


  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
    this.mainSer.get_players_with_nationality({"nationality": value}).subscribe(data => {
      this.players_info = data;
      console.log(this.players_info);
    })
}


}
