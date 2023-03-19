import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import {SearchResult} from "../../../../moogle-server/src/Data/SearchResult";
import {Observable} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {
  private apiUrl: string = 'http://localhost:5000/search';
  public query: string = 'boilerplate';
  constructor(private http: HttpClient) { }

  getResult(): Observable<SearchResult>{
    const queryUrl = this.apiUrl + "?query=" + this.query;
    return this.http.get<SearchResult>(queryUrl);
  }

  getSingleResult(query: string){
    const queryUrl = this.apiUrl + "?query=" + query;
    return this.http.get<SearchResult>(queryUrl);
  }
}
