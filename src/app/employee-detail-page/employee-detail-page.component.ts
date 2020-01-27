import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail-page',
  template: `<h3>{{empId}}</h3>
  <router-outlet></router-outlet>
  <p>
  <button (click)=showOverview()>Overview</button>
  <button (click)=showContact()>Contact</button>
  </p>
  
  <a (click)=onPrevious()>previous</a>
  <a  (click)=onNext()>next</a>
  <a  (click)=goBack()>Back</a>
  `,
  styles: [`
  a {
    display:flex;
    background-color:aqua;
    max-width:100px;
    padding:auto;
    margin:3px  
  }

  `]
})
export class EmployeeDetailPageComponent implements OnInit {
  public employees
  public employee
  public empId
  constructor(private route:ActivatedRoute, private router:Router,private employeeService:EmployeeService) { }

  ngOnInit() {
    // this.empId=parseInt( this.route.snapshot.paramMap.get("id"))
    this.employees=this.employeeService.getEmployees();
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.empId=parseInt(params.get("id"));
    })
    this.employee=this.employees.find(item=>item.id==this.empId)

  }

  onPrevious(){
    let preId=parseInt( this.empId)-1;
    if(preId<1)preId=1;
    //below line is like path.join
    this.router.navigate(['../',preId],{relativeTo :this.route});

    // this.router.navigate(['/empDetail',preId])
  }

  onNext(){
    let nextId= parseInt( this.empId)+1;
    nextId=nextId>this.employees.length?1:nextId
    this.router.navigate(['../',nextId],{relativeTo :this.route});

    // this.router.navigate(['/empDetail',nextId])
  }

  goBack() {
    // this.router.navigate(['/empDetail',{id:this.empId}])
    this.router.navigate(['../',{id:this.empId}],{relativeTo :this.route});
    //if object is passed it is a optional parameter
  }

  showOverview(){
    this.router.navigate(['overview'],{relativeTo :this.route});
  }

  showContact(){
    this.router.navigate(['contact',{contact:this.employee.contact  }],{relativeTo :this.route});
  }

}
