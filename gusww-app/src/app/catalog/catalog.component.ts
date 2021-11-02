import { Component, OnInit } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';
import { SampleDataService } from '../shared/services/sample-data.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {
  
  displayedColumns: string[] = ['title', 'description', 'market'];
  hasMarketCapability:string = "{OpsGroups: ['ops_influencer', 'ops_marcom', 'ops_staff']}";
  constructor(public sampleDataService:SampleDataService, public authService: OktaAuthStateService) { }

  ngOnInit(): void {

    
  }

}
