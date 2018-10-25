import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class ProjectsService {

// ApiUrl="http://localhost:4200/assets/data/data.json";
apiUrl="http://localhost:3000/projects/";

datatopost;

httpOptions = {
 headers: new HttpHeaders({
   'Content-Type':  'application/json'
 })};

  constructor(private http:HttpClient,private router:Router) {

  }

// get all Projects
getProjects(){
    return this.http.get(this.apiUrl);
}

// get one Project by Id
getProject(id){
    return this.http.get(this.apiUrl+id);
}

// create a Project
createProject(name,description,start,end,value,status){
    // body envoyé dans la requête, appelé payload
    const payload =
        {
          "name":name,
          "description":description,
          "start":start,
          "end":end,
          "value":value,
          "status":status  
        }

    // conversion en jSON
    this.datatopost=JSON.stringify(payload);

    // requête http en post qui renvoie resp ou err
    return this.http.post(this.apiUrl,this.datatopost,this.httpOptions).subscribe(
        res =>{
            console.log(res);
        },
        err => {
            console.log(err.message);
        }
    );
}

// mise à jour salarié
updatedProject(name,description,start,end,value,status,id){

    // body envoyé dans la requête, appelé payload
    const payload =
        {
          "name":name,
          "description":description,
          "start":start,
          "end":end,
          "value":value,
          "status":status
        }

        // conversion en JSON
        this.datatopost=JSON.stringify(payload);

        // requête http en post qui renvoie resp ou err
        return this.http.put(this.apiUrl+id,this.datatopost,this.httpOptions).subscribe(
            res =>{
                console.log(res);
            },
            err => {
                console.log(err.message);
            }
        );

}

// suppression d'un salarié
delete(id){
    return this.http.delete(this.apiUrl+id);
}

}