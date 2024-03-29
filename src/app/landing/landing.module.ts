import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FormsModule
  ]
})
export class LandingModule { }
