import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] | undefined;
  
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.getCustomers();
    //   this.customers = [
    //     {"id": 111,
    //     "firstName": "Nihal",
    //     "lastName": "Singh",
    //     "address": "Pune",
    //     "email": "nm@cg.com",
    //     "mobile": "8600033309"
    //   },
    //   {"id": 112,
    //   "firstName": "Rahul",
    //   "lastName": "Kumar",
    //   "address": "Mumbai",
    //   "email": "rk@cg.com",
    //   "mobile": "770945674"
    //   },
    //   {"id": 113,
    //   "firstName": "Raj",
    //   "lastName": "Shetty",
    //   "address": "Hyd",
    //   "email": "rs@cg.com",
    //   "mobile": "6670033309"
    // },


    //   ]
  }

  private getCustomers() {
    this.customerService.getCustomerList().subscribe(data => { this.customers = data, console.log(data)});
  }

  updateCustomer(id: number){
    this.router.navigate(['/update-customer',id]);
  }

 deleteCustomer(id: number){
   this.customerService.deleteCustomer(id).subscribe(data => {
     console.log(data),
     this.getCustomers();
    },error => console.log(console.error))
   
 }

 viewCustomerById(id: number){
  this.customerService.getCustomerById(id).subscribe(data => {
    console.log(data),
    this.getCustomers();
    this.router.navigate(['/customer-details',id]);
  
},)
}
}
 
