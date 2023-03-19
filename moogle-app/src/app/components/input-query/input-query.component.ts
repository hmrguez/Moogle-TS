import {Component, OnInit, ViewChild} from '@angular/core';
import {SearchResultService} from "../../services/search-result.service";
import {ResultComponent} from "../result/result.component";

@Component({
  selector: 'app-input-query',
  templateUrl: './input-query.component.html',
  styleUrls: ['./input-query.component.css']
})
export class InputQueryComponent implements OnInit{
  @ViewChild(ResultComponent) otherComponent? : ResultComponent;
  ngOnInit(): void {
  }

  constructor(private searchResultService: SearchResultService) {}

  getValue(value: string, resultComp: ResultComponent)
  {
    this.searchResultService.query = value;
    // resultComp.result = this.searchResultService.getResult()
    // console.log(resultComp.result)
  }
}
