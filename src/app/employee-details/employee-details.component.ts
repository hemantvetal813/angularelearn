import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-details',
template: `
<h3>employees details</h3>
  <ul *ngFor ='let employee of employees; index as i'>
  <li (click)=onSelect(employee)  [class.selected]=isSelected(employee)>{{employee.name}} {{employee.age}}</li>
  </ul>
  `,
  styles: [`
  
  li.selected{
    color:red
    
  }
  .asd{
    display: block;
    background-color: red;
    max-width:100px
  }
  `]
})
export class EmployeeDetailsComponent implements OnInit {

  public employees=[];
  public selectedId
  constructor(private employeeService:EmployeeService, private router:Router,private route:ActivatedRoute) { }


  ngOnInit() {
    this.employees=this.employeeService.getEmployees();   
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.selectedId=parseInt(params.get("id"))
    })
  }

  onSelect(emp){
    // this.router.navigate(['/empDetail',emp.id])
    this.router.navigate([emp.id],{relativeTo :this.route});
  }

  isSelected(emp){
    return emp.id==this.selectedId
  }

}
