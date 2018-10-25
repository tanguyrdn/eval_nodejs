import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../../services/customers.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {
  formCreate={
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
  constructor(private customersService:CustomersService,private route:Router) { }

  ngOnInit() {
  }
  // fonction appelée au clique du bouton ajouter - voir html fonction (click)
  createCustomer(){
    // on consomme notre service qui a comme arguments les valuers du formulaire
    this.customersService
    .createCustomer(this.formCreate.name,this.formCreate.adress,this.formCreate.contact.name,this.formCreate.contact.firstname,this.formCreate.contact.phonenumber,this.formCreate.contact.mailto,this.formCreate.position);
  }
}
