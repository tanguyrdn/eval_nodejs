import { Component, OnInit } from '@angular/core';

import {CustomersService} from '../../services/customers.service'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  
  customers;

  constructor(private customersService:CustomersService) { 
    this.customersService.getCustomers().subscribe(customers=>{
      this.customers=customers;
      console.log(customers);
    })

  }

  ngOnInit() {
  }
  deleteCustomer(id){
    this.customersService
    .delete(id).subscribe(resp=>{
      console.log(resp);
    });
    //on recharge la page
    location.reload();
  }
}
