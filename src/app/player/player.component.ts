import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  players_array: any;
  player_info: any;

  constructor(private mainSer: MainServiceService) { }

  ngOnInit(): void {
    this.mainSer.get_players().subscribe(data => {
      this.players_array = data;
      console.log(this.players_array);
    })
  }

  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
    this.mainSer.get_player_info({"player_name": value}).subscribe(data => {
      this.player_info = data;
      console.log(this.player_info);
    })
}

}
