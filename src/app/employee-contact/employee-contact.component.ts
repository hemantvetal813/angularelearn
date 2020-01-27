import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-contact',
  template: `
    <p>
      {{contact}}
    </p>
  `,
  styles: []
})
export class EmployeeContactComponent implements OnInit {
  public contact;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
       this.contact=params.get("contact")
    })
  }

}
// this.emp=params.get("emp")