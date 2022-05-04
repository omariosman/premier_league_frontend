import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TopTeamsService {
  top_teams_by_matches_won_API = "http://localhost:8000/api/v1/get_top_teams_by_matches_won/";
  top_teams_by_home_matches_won_API = "http://localhost:8000/api/v1/get_top_teams_by_home_matches_won/";
  top_teams_by_yellow_cards_API = "http://localhost:8000/api/v1/get_top_teams_by_yellow_cards/";
  top_teams_by_shots_API = "http://localhost:8000/api/v1/get_top_teams_by_shots/";
  top_teams_by_fouls_API = "http://localhost:8000/api/v1/get_top_teams_by_fouls/";
  top_teams_by_season_API = "http://localhost:8000/api/v1/get_top_teams_by_season/";


  constructor(private http: HttpClient) { }

  get_top_teams_by_matches_won(): Observable<any>{
    return this.http.get<any>(this.top_teams_by_matches_won_API, {})
  }


  get_top_teams_by_home_matches_won(): Observable<any>{
    return this.http.get<any>(this.top_teams_by_home_matches_won_API, {})
  }
  

  get_top_teams_by_yellow_cards(): Observable<any>{
    return this.http.get<any>(this.top_teams_by_yellow_cards_API, {})
  }
  

  get_top_teams_by_shots(): Observable<any>{
    return this.http.get<any>(this.top_teams_by_shots_API, {})
  }
  
  get_top_teams_by_fouls(): Observable<any>{
    return this.http.get<any>(this.top_teams_by_fouls_API, {})
  }

  get_top_teams_by_season(): Observable<any>{
    return this.http.get<any>(this.top_teams_by_season_API, {})
  }

  

}
