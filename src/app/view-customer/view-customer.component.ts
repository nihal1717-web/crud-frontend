import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  id: number = 0;
  customer: Customer = new Customer();
  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data => {
      this.customer = data; console.log(data);
    },
    );
  }

  itemImageUrl = '../assets/1.jpg';
}