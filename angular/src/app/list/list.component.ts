import { Component, OnInit } from '@angular/core';
import { customer } from '../customer';
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  custData:customer;
  constructor(private router:Router,private customer:CustomerService) { }

  ngOnInit(): void {
    this.customer.getDetails().subscribe(data =>{
      this.custData = data;
  });
  }


  onClick(id){

    this.router.navigate(['/edit',id]);
  }


  searchCustomer(){

  }


  addCustomer(){
    this.router.navigate(['/add']);
  }
  





}
