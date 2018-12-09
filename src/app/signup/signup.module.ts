import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SignUpService } from '../services/auth/signup.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SignupRoutingModule
  ],
  declarations: [SignupComponent],
  providers: [
    SignUpService
  ]

})
export class SignupModule { }
