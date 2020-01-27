import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
  <h3>employees Lists</h3>
  <ul *ngFor ='let employee of employees; index as i'>
  <li>{{employee.name}}</li>
  </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees=[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employees=this.employeeService.getEmployees();   
  }

}
