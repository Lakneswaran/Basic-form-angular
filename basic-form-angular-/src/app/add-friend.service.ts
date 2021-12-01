import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from './friend';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  constructor(private http:HttpClient) {

   }

   
   var url = "";
   addFriend(friend:Friend){

    this.http.post(this.url, { title: 'Angular POST Request Example' }).subscribe(data => {
     })
   }
}
