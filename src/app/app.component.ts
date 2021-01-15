import { Component, HostListener } from '@angular/core';
import { DataService } from './DataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamHelp';
  totalAns=0;
  constructor(public dataService:DataService){
    this.dataService.screen_size=window.screen.width-200+""+"px";
  }

  setTotalCount(event){
    this.totalAns=event;
  }

  @HostListener("window:resize") onresizeWindow(){
    console.log(window.screen);
    this.dataService.screen_size=window.screen.width-200+""+"px";
    
  }
}
