import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import {SearchResult} from "../../../../moogle-server/src/Data/SearchResult";
import {Observable} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {
  private searchUrl: string = 'http://localhost:5000/search';
  private addDocUrl: string = 'http://localhost:5000/add'
  constructor(private http: HttpClient) { }

  getSingleResult(query: string){
    const queryUrl = this.searchUrl + "?query=" + query;
    return this.http.get<SearchResult>(queryUrl);
  }

  addElementToDb(title: string, content: string){
    // const bodyData = new FormData();
    // bodyData.append('title', title)
    // bodyData.append('content', content)

    const bodyData = {
      title: title,
      content: content
    }

    const temp = this.http.post(this.addDocUrl, bodyData);
    temp.subscribe(x=> console.log(x))
  }
}
