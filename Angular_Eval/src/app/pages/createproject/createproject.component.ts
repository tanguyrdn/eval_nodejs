import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../services/projects.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {
  formCreate={
    name:"",
    description:"",
    start:"",
    end:"",
    value:"",
    status:""
  }
  constructor(private projectsService:ProjectsService,private route:Router) {

   }

  ngOnInit() {
  }
  createProject(){
    // on consomme notre service qui a comme arguments les valuers du formulaire
    this.projectsService
    .createProject(this.formCreate.name,this.formCreate.description,this.formCreate.start,this.formCreate.end,this.formCreate.value,this.formCreate.status);
  }

}
