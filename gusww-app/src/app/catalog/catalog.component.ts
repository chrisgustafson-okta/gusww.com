import { Component, OnInit } from '@angular/core';
import { SampleDataService } from '../shared/services/sample-data.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {
  
  displayedColumns: string[] = ['title', 'description', 'rating', 'market'];

  constructor(public sampleDataService:SampleDataService) { }

  ngOnInit(): void {
  }

}
