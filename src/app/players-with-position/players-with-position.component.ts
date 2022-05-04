import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-players-with-position',
  templateUrl: './players-with-position.component.html',
  styleUrls: ['./players-with-position.component.css']
})
export class PlayersWithPositionComponent implements OnInit {
  positions_array: any;
  players_info: any;

  constructor(private mainSer: MainServiceService) { }

  ngOnInit(): void {
    this.mainSer.get_positions().subscribe(data => {
      this.positions_array = data;
      console.log(this.positions_array);
    })
  }

  

  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
    this.mainSer.get_players_with_position({"position": value}).subscribe(data => {
      this.players_info = data;
      console.log(this.players_info);
    })

  }
}
