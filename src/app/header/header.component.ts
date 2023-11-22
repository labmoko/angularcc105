import { Component } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private backEndService: BackendService){}
  
  ngOnInit(){

  }

  onSave(){
    this.backEndService.saveData();
  }
  onFetch(){
    this.backEndService.fetchData();
  }

}
