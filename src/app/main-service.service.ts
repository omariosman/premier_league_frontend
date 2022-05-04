import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShowMatchReviewInterface } from './show-match-review/show-match-review-interface';
import { InsertFanInterface } from './insert-fan/insert-fan-interface';
import { MatchReviewInterface } from './match-review/match-review-interface';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  matches_API = "http://localhost:8000/api/v1/get_all_matches/";


  insert_match_review_API = "http://localhost:8000/api/v1/insert_match_review/";

  show_match_review_API = "http://localhost:8000/api/v1/show_match_review/";

  insert_fan_API = "http://localhost:8000/api/v1/insert_fan/";

  nationality_API = "http://localhost:8000/api/v1/get_nationality/";


  get_players_with_nationality_API = "http://localhost:8000/api/v1/get_players_with_nationality/";



  positions_API = "http://localhost:8000/api/v1/get_positions/";


  get_players_with_position_API = "http://localhost:8000/api/v1/get_players_with_position/";


  clubs_API = "http://localhost:8000/api/v1/get_clubs/";


  get_club_info_API = "http://localhost:8000/api/v1/get_club_info/";

  players_API = "http://localhost:8000/api/v1/get_players/";

  get_player_info_API = "http://localhost:8000/api/v1/get_player_info/";

  stadiums_API = "http://localhost:8000/api/v1/get_stadiums/";

  get_stadium_info_API = "http://localhost:8000/api/v1/get_stadium_info/";

  constructor(private http: HttpClient) { }

  get_all_matches(): Observable<any>{
    return this.http.get<any>(this.matches_API, {})

  }

  recordResult(newResult: MatchReviewInterface): Observable<any> {
    const jsonresult = JSON.stringify(newResult);
    console.log("Res: ", jsonresult);
    return this.http.post<any>(this.insert_match_review_API, jsonresult);

  }

  show_match_review(res :ShowMatchReviewInterface): Observable<any>{
    return this.http.post<any>(this.show_match_review_API, res)

  }



  insertFan(newResult: InsertFanInterface): Observable<any> {
    const jsonresult = JSON.stringify(newResult);
    console.log("Res: ", jsonresult);
    return this.http.post<any>(this.insert_fan_API, jsonresult);

  }


  get_nationality(): Observable<any>{
    return this.http.get<any>(this.nationality_API, {})

  }


  get_players_with_nationality(newResult: any): Observable<any> {
    const jsonresult = JSON.stringify(newResult);
    console.log("Res: ", jsonresult);
    return this.http.post<any>(this.get_players_with_nationality_API, jsonresult);

  }
  

  get_clubs(): Observable<any>{
    return this.http.get<any>(this.clubs_API, {})
  }


  get_club_info(newResult: any): Observable<any> {
    const jsonresult = JSON.stringify(newResult);
    console.log("Res: ", jsonresult);
    return this.http.post<any>(this.get_club_info_API, jsonresult);

  }
  

  get_player_info(newResult: any): Observable<any> {
    const jsonresult = JSON.stringify(newResult);
    console.log("Res: ", jsonresult);
    return this.http.post<any>(this.get_player_info_API, jsonresult);

  }

  
  get_players(): Observable<any>{
    return this.http.get<any>(this.players_API, {})
  }

  
    
  get_stadiums(): Observable<any>{
    return this.http.get<any>(this.stadiums_API, {})
  }

  get_stadium_info(newResult: any): Observable<any> {
    const jsonresult = JSON.stringify(newResult);
    console.log("Res: ", jsonresult);
    return this.http.post<any>(this.get_stadium_info_API, jsonresult);

  }


  

  get_positions(): Observable<any>{
    return this.http.get<any>(this.positions_API, {})

  }


  get_players_with_position(newResult: any): Observable<any> {
    const jsonresult = JSON.stringify(newResult);
    console.log("Res: ", jsonresult);
    return this.http.post<any>(this.get_players_with_position_API, jsonresult);

  }
  
}




