import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HeaderComponent } from './partials/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateworkerComponent } from './pages/createworker/createworker.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkerComponent } from './pages/worker/worker.component';

import {WorkersService} from './services/workers.service';
import {CustomersService} from './services/customers.service';
import {ProjectsService} from './services/projects.service';
import { UpdateworkerComponent } from './pages/updateworker/updateworker.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CreatecustomerComponent } from './pages/createcustomer/createcustomer.component';
import { UpdatecustomerComponent } from './pages/updatecustomer/updatecustomer.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectComponent } from './pages/project/project.component';
import { CreateprojectComponent } from './pages/createproject/createproject.component';
import { UpdateprojectComponent } from './pages/updateproject/updateproject.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    WorkersComponent,
    HomeComponent,
    UpdateworkerComponent,
    CreateworkerComponent,
    AboutComponent,
    WorkerComponent,
    CustomersComponent,
    CustomerComponent,
    CreatecustomerComponent,
    UpdatecustomerComponent,
    ProjectsComponent,
    ProjectComponent,
    CreateprojectComponent,
    UpdateprojectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WorkersService,
    CustomersService,
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
