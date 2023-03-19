import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import {SearchResult} from "../../../../moogle-server/src/Data/SearchResult";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {
  private apiUrl: string = 'http://localhost:5000/search';

  constructor(private http: HttpClient) { }

  getResult(): Observable<SearchResult>{
    return this.http.get<SearchResult>(this.apiUrl);
  }
}
