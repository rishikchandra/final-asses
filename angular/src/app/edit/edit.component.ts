import { Component, OnInit } from '@angular/core';
import { customer } from '../customer';
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  public id:string;
  custData:customer;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private customer:CustomerService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      let bid = params.get('id');
      console.log(bid);
    
    this.customer.getById(bid).subscribe(data=>{
      this.custData = data;
      console.log(this.custData);
    });
  });
    
  }

  deleteCustomer(){
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      let bid = params.get('id');
      console.log(bid);
    this.customer.deleteCustomer(bid).subscribe(data=>{
      // console.log(data._id);
      });
    })
    this.router.navigate(['/list']);
  }
  
}
