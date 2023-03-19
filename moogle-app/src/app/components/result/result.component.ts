import { Component, OnInit } from '@angular/core';
import {SearchResultService} from "../../services/search-result.service";
import {SearchResult} from "../../../../../moogle-server/src/Data/SearchResult";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements  OnInit{
  result?: SearchResult;

  constructor(private searchResultService: SearchResultService) {}

  ngOnInit(): void {
    this.searchResultService.getResult().subscribe((result) => this.result = result);
  }

}
