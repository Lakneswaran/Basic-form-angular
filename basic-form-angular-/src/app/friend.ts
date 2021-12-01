import { HttpClient } from "@angular/common/http";

export class Friend {
    fname:string;
    lname:string;
    email: string;
    telefoon: string;
    city: string;
    zip: string;
    sex: string;
    comments: string;
    constructor(
        fname:string,
        lname:string,
        email: string,
        telefoon: string,
        city: string,
        zip: string,
        sex: string,
        comments: string      
        
       ){
           this.fname = fname;
           this.lname =lname;
           this.email = email;
           this.telefoon = telefoon;
            this.city = city;
            this.zip = zip;
            this.sex = sex;
            this.comments = comments; 
            
           

       }

}
