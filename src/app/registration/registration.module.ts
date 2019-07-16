import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';
import { AuthorizationService } from '../authorization/authorization.service';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [AuthorizationService]
})
export class RegistrationModule { }
