import {Component, OnInit} from '@angular/core';
import {SearchResultService} from "../../services/search-result.service";
// import * as events from "events";

@Component({
  selector: 'app-add-doc-form',
  templateUrl: './add-doc-form.component.html',
  styleUrls: ['./add-doc-form.component.css']
})
export class AddDocFormComponent implements OnInit{

  constructor(private searchService: SearchResultService) {
  }

  ngOnInit(): void {
  }

  readFile(event: any){
    const file = event.target.files[0];
    const reader = new FileReader()
    reader.onload = () => {
      const title = file.name;
      const content = reader.result as string;
      this.searchService.addElementToDb(title, content)
    }

    reader.readAsText(file)
  }
}
