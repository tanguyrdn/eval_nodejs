import { Component, OnInit } from '@angular/core';

import {WorkersService} from '../../services/workers.service';
import {CustomersService} from '../../services/customers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  workers;
  customers;

  constructor(private customersService:CustomersService, private workersService:WorkersService) {
    this.customersService.getCustomers().subscribe(customers=>{
      this.customers=customers;
      console.log(customers);
     })
     this.workersService.getWorkers().subscribe(workers=>{
      this.workers=workers;
      console.log(workers); 
     })
   }

  ngOnInit() {
  }

}
