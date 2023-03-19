import { Component, OnInit, Input } from '@angular/core';
import {SearchItem} from "../../../../../moogle-server/src/Data/SearchItem";

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit{
  @Input() item?: SearchItem;

  ngOnInit(): void {
  }

}
