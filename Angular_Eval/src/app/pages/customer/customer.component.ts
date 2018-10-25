import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { ActivatedRoute } from "@angular/router";
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer;
  customerId;

  constructor(private customersService:CustomersService,private route:ActivatedRoute,private router:Router) {
    // Récupérer l'id dans  la route
    this.route.params.subscribe((params) => {
      this.customerId=params['id'];
      console.log(params['id']);
   })
   // utiliser le service qui permet d'avoir un client en fonction de l'id
   this.customersService.getCustomer(this.customerId).subscribe(customer=>{

    this.customer=customer;
    console.log(this.customer);

    });
  }

  ngOnInit() {
  }
   // fonction de suppression qui est utilisé au click (voir html)
   deleteCustomer(){
    this.customersService.delete(this.customerId).subscribe(user=>{
        console.log(this.customer);
        // on retourne sur la page customers
         this.router.navigate['customers'];
    });

  }
}
