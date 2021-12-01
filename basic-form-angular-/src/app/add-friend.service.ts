import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from './friend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  constructor(private http:HttpClient) {

   }

   
    url = "http://localhost:9000/allFriends";
    
   addFriend(friend:Friend, url: string):Observable<any>{

    return this.http.post(this.url, friend);
   }

   getFriend(url: string):Observable<any>{
     return this.http.get(url);
   }
}
