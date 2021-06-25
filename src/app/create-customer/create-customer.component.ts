import { CustomerService } from './../customer.service';
import { Customer } from './../customer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
 
  customer: Customer = new Customer();
 
  constructor(private customerService: CustomerService, private router: Router) { }
 
  ngOnInit(): void {
  }
 
  onSubmit() {
    this.saveCustomer();
  }
 
  saveCustomer(){
    this.customerService.createCustomer(this.customer).subscribe( data => {console.log(data);}, error => console.log(error));
    this.navigateToCustomers();
  }
 
  navigateToCustomers(){
     this.router.navigate(['/customer']);
  }
 
}