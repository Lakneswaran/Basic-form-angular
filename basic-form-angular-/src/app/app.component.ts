import { Component } from '@angular/core';
import { Friend } from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-form-angular';
  langs: string[] = [
    'HTML',
    'JSS',
    'CSS',
    'PHP',
    'Java'
  ];

  states: string[] = [
    'Antwerpen',
    'Brugge',
    'Brussel',
    'Not in list'
  ];

 friendModel = new Friend("", "", "", "", "", "", "");
 trigger(){
   console.log(this.friendModel);
 }

}



