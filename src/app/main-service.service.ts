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
}




