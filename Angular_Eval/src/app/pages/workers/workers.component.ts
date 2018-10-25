import { Component, OnInit } from '@angular/core';

import {WorkersService} from '../../services/workers.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  workers;

  constructor(private workersService:WorkersService) {
    this.workersService.getWorkers().subscribe(workers=>{
      this.workers=workers;
      console.log(workers);
    })
   }

  ngOnInit() {
  }
  deleteWorker(id){
    this.workersService
    .delete(id).subscribe(resp=>{
        console.log(resp);
    });
    // on recharge la page
    location.reload();
  }
}
