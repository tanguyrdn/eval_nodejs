import { Component, OnInit } from '@angular/core';

import {ProjectsService} from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects;

  constructor(private projectsService:ProjectsService) {
    this.projectsService.getProjects().subscribe(projects=>{
      this.projects=projects;
      console.log(projects);
    })
   }

  ngOnInit() {
  }
  deleteProject(id){
    this.projectsService
    .delete(id).subscribe(resp=>{
        console.log(resp);
    });
    // on recharge la page
    location.reload();
  }
}
