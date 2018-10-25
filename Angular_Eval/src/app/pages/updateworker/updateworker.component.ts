import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../../services/workers.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-updateworker',
  templateUrl: './updateworker.component.html',
  styleUrls: ['./updateworker.component.css']
})
export class UpdateworkerComponent implements OnInit {
    worker;
    workerId;
    formUpdate={
        name:"",
        firstname:"",
        username:"",
        birthdate:"",
        adress:"",
        phonenumber:"",
        mailto:"",
        position:""
    }

  constructor(private workersService:WorkersService,private route:ActivatedRoute) { 
    this.route.params.subscribe((params) => {
      this.workerId=params['id'];
  })

  this.workersService.getWorker(this.workerId).subscribe(worker=>{

      this.worker=worker;
      console.log(this.worker);

    });
  }

  ngOnInit() {
  }
  updateWorker(id){
    this.workersService
    .updatedWorker(this.formUpdate.name,this.formUpdate.firstname,this.formUpdate.username,this.formUpdate.birthdate,this.formUpdate.adress,this.formUpdate.phonenumber,this.formUpdate.mailto,this.formUpdate.position,this.workerId)      
  }

}
