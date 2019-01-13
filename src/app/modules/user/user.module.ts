import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [LoginComponent, LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbModule,
    NgModule
  ]
})
export class HomeModule { }