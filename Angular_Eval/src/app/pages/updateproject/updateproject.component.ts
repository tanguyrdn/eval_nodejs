import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
  styleUrls: ['./updateproject.component.css']
})
export class UpdateprojectComponent implements OnInit {
  project;
  projectId;
  formUpdate={
    name:"",
    description:"",
    start:"",
    end:"",
    value:"",
    status:"",
}
constructor(private projectsService:ProjectsService,private route:ActivatedRoute) { 
  this.route.params.subscribe((params) => {
    this.projectId=params['id'];
})

this.projectsService.getProject(this.projectId).subscribe(project=>{

    this.project=project;
    console.log(this.project);

  });
}

ngOnInit() {
}
updateProject(id){
  this.projectsService
  .updatedProject(this.formUpdate.name,this.formUpdate.description,this.formUpdate.start,this.formUpdate.end,this.formUpdate.value,this.formUpdate.status,this.projectId)      
}

}

