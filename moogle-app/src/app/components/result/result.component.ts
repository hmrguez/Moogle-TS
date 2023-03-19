import {Component, OnInit} from '@angular/core';
import {SearchResultService} from "../../services/search-result.service";
import {SearchResult} from "../../../../../moogle-server/src/Data/SearchResult";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent{
  result?: SearchResult;

  constructor(private searchResultService: SearchResultService) {}

  changeResult(query: string){
      this.searchResultService.getSingleResult(query).subscribe((result) => this.result = result);
  }
}
