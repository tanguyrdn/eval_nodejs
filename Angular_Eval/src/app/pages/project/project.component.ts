import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { ActivatedRoute } from "@angular/router";
import {Router} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project;
  projectId;
  constructor(private projectsService:ProjectsService,private route:ActivatedRoute,private router:Router) {
    // Récupérer l'id dans  la route
    this.route.params.subscribe((params) => {
      this.projectId=params['id'];
      console.log(params['id']);
   })
   // utiliser le service qui permet d'avoir un client en fonction de l'id
   this.projectsService.getProject(this.projectId).subscribe(project=>{

    this.project=project;
    console.log(this.project);

    });
  }

  ngOnInit() {
  }
   // fonction de suppression qui est utilisé au click (voir html)
   deleteProject(){
    this.projectsService.delete(this.projectId).subscribe(user=>{
        console.log(this.project);
        // on retourne sur la page projects
         this.router.navigate['projects'];
    });

  }
}