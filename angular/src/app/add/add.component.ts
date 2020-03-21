import { Component, OnInit } from '@angular/core';
import { customer } from '../customer';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  custData:customer;
  public id:string;
  constructor(private router:Router,private customer:CustomerService) {
    this.custData={
      firstname:null,
      lastname:null,

      address:null,
      city:null,
      state:null
    }
   }

  ngOnInit(): void {
  }

  addCustomer(){
    console.log(this.custData);
    this.customer.addingCustomer(this.custData).subscribe(data=>{
      console.log(data);
    });
    this.router.navigate(['/list']);
  }

  cancelCustomer(){
    this.router.navigate(['/list']);
  }
  

  

}
