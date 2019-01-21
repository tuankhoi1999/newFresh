import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


import { HeaderComponent } from './header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent, NavbarComponent, LoginFormComponent],
  imports: [
    CommonModule,
    NgbDropdownModule,
    FormsModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
