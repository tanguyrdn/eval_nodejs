import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkersComponent} from './pages/workers/workers.component';
import {HomeComponent} from './pages/home/home.component';
import {WorkerComponent} from './pages/worker/worker.component';
import { AboutComponent } from './pages/about/about.component';
import { CreateworkerComponent } from './pages/createworker/createworker.component';
import { UpdateworkerComponent } from './pages/updateworker/updateworker.component';
import {CustomersComponent} from './pages/customers/customers.component';
import {CustomerComponent} from './pages/customer/customer.component';
import {CreatecustomerComponent} from './pages/createcustomer/createcustomer.component';
import {UpdatecustomerComponent} from './pages/updatecustomer/updatecustomer.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {ProjectComponent} from './pages/project/project.component';
import {CreateprojectComponent} from './pages/createproject/createproject.component';
import {UpdateprojectComponent} from './pages/updateproject/updateproject.component';
const routes: Routes = [

    {
        path:'',
        component:HomeComponent,
    },
    {
        path:'workers',
        component:WorkersComponent,
    },
    {
        path:'worker/:id',
        component:WorkerComponent,
    },
    {
        path:'about',
        component:AboutComponent,
    },
    {
        path:'createworker',
        component:CreateworkerComponent,
    },
    {
        path:'updateworker/:id',
        component:UpdateworkerComponent,
    },
    {
        path:'customers',
        component:CustomersComponent,
    },
    {
        path:'customer/:id',
        component:CustomerComponent,
    },
    {
        path:'createcustomer',
        component:CreatecustomerComponent,
    },
    {
        path:'updatecustomer/:id',
        component:UpdatecustomerComponent,
    },
    {
        path:'projects',
        component:ProjectsComponent,
    },
    {
        path:'project/:id',
        component:ProjectComponent,
    },
    {
        path:'createproject',
        component:CreateprojectComponent,
    },
    {
        path:'updateproject/:id',
        component:UpdateprojectComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }