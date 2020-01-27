import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AsdComponent } from './asd/asd.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailPageComponent } from './employee-detail-page/employee-detail-page.component';
import { EmployeeOverViewComponent } from './employee-over-view/employee-over-view.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';


const routes: Routes = [
  {path:"",redirectTo:"/empList",pathMatch:'full'},
  {path:"empList",component:EmployeeListComponent},
  {path:"practice",component:AsdComponent},
  {path:"empDetail",component:EmployeeDetailsComponent},
  {
    path:"empDetail/:id",
    component:EmployeeDetailPageComponent,
    children:[//for child routes add <router-outlet> in EmployeeDetailPageComponent html
      {path:"overview",component:EmployeeOverViewComponent},
      {path:"contact",component:EmployeeContactComponent},
    ]
  },
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[EmployeeDetailsComponent,
    EmployeeListComponent,AsdComponent,PageNotFoundComponent,EmployeeDetailPageComponent,
    EmployeeOverViewComponent,EmployeeContactComponent
  ]
