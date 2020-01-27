import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
   getEmployees() {
     return [
       {"id":1,"name":"a","age":30,contact:1232323},
       {"id":2,"name":"b","age":40,contact:14545},
       {"id":3,"name":"c","age":50,contact:156767},
       {"id":4,"name":"d","age":60,contact:166676}
     ]
   }
}
