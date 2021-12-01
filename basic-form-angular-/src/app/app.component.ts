import { Component } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private addFriendServies: AddFriendService){

  }

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
 dataSaved: any = [];

 ngOnInit(): void{
  //  this.addFriendServies.getFriend(this.addFriendServies.url).subscribe((dataSaved) => (this.dataSaved = this.dataSaved));
  //  console.log(this.dataSaved);
  this.showFriends();
 }

 allFriends:any
 async showFriends(): Promise<void>{
   let apiFriend = await fetch ("http://localhost:9000/allFriends", {headers: {
     'Content-Type': 'application/json'}});
   this.allFriends = await apiFriend.json();

   console.log(this.allFriends);
 }

 trigger(angularForm: NgForm){
   
   this.addFriendServies.addFriend(this.friendModel, this.addFriendServies.url)
   .subscribe((dataSaved: Friend) => {console.log('it worked')}, error => {console.log('it didnt working')});
  this.showFriends();
 }

}

// this.addFriendServies.addFriend(this.friendModel, this.addFriendServies.url)
// .subscribe({
//  next(position) {
//    console.log('Current Position: ', position);
   
//  },
//  error(msg) {
//    console.log('Error Getting Location: ', msg);
//  }
// }



