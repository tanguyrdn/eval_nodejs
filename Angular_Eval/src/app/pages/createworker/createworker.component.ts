import { Component, OnInit } from '@angular/core';
import {WorkersService} from '../../services/workers.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createworker',
  templateUrl: './createworker.component.html',
  styleUrls: ['./createworker.component.css']
})
export class CreateworkerComponent implements OnInit {
  formCreate={
    name:"",
    firstname:"",
    username:"",
    birthdate:"",
    adress:"",
    phonenumber:"",
    mailto:"",
    position:""
  }

  constructor(private workersService:WorkersService,private route:Router) {

   }

  ngOnInit() {
  }
  // fonction appelée au clique du bouton ajouter - voir html fonction (click)
  createWorker(){
    // on consomme notre service qui a comme arguments les valuers du formulaire
    this.workersService
    .createWorker(this.formCreate.name,this.formCreate.firstname,this.formCreate.username,this.formCreate.birthdate,this.formCreate.adress,this.formCreate.phonenumber,this.formCreate.mailto,this.formCreate.position);
  }

}
