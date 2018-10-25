import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../../services/workers.service';
import { ActivatedRoute } from "@angular/router";
import {Router} from '@angular/router';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  worker;
  workerId;

  constructor(private workersService:WorkersService,private route:ActivatedRoute,private router:Router) {
    // Récupérer l'id dans  la route
    this.route.params.subscribe((params) => {
      this.workerId=params['id'];
      console.log(params['id']);
   })
   // utiliser le service qui permet d'avoir un salarié en fonction de l'id
   this.workersService.getWorker(this.workerId).subscribe(worker=>{

    this.worker=worker;
    console.log(this.worker);

});

}

  ngOnInit() {
  }
   // fonction de suppression qui est utilisé au click (voir html)
   deleteWorker(){
    this.workersService.delete(this.workerId).subscribe(user=>{
        console.log(this.worker);
        // on retourne sur la page workers
         this.router.navigate['workers'];
    });

}


}
