import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/services/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public userData:UserDataService) { 

    
  }
  displayedColumns: string[] = ['claim', 'value'];
  

  async ngOnInit()  {
  
  }

}
