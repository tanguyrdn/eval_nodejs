import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {
  customer;
  customerId;
  formUpdate={
    name:"",
    adress:"",
    contact: {
      name:"",
      firstname:"",
      phonenumber:"",
      mailto:"",
    },
    position:""
  }
  constructor(private customersService:CustomersService,private route:ActivatedRoute) { 
    this.route.params.subscribe((params) => {
      this.customerId=params['id'];
  })

  this.customersService.getCustomer(this.customerId).subscribe(customer=>{

      this.customer=customer;
      console.log(this.customer);

    });
  }

  ngOnInit() {
  }
  updateCustomer(id){
    this.customersService
    .updatedCustomer(this.formUpdate.name,this.formUpdate.adress,this.formUpdate.contact.name,this.formUpdate.contact.firstname,this.formUpdate.contact.phonenumber,this.formUpdate.contact.mailto,this.formUpdate.position,this.customerId)      
  }

}