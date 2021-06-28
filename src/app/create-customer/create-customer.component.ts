import { CustomerService } from './../customer.service';
import { Customer } from './../customer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
 
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
 
  customer: Customer = new Customer();
  addForm!: NgForm;
 
  constructor(private customerService: CustomerService, private router: Router) { }
 
  ngOnInit(): void {
  }
 
  onSubmit() {
    console.log('inside onsubmit method..')
    this.saveCustomer(this.addForm);
  }
 
  saveCustomer(addForm: NgForm){
    this.customerService.createCustomer(this.customer).subscribe( data => {console.log(data);
    this.navigateToCustomers();},
    (error: HttpErrorResponse) => {console.log(error); alert(error.message);addForm.reset();})
    
  }
 
  navigateToCustomers(){
     this.router.navigate(['/customer']);
  }
 
}