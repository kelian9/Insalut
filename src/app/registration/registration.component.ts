import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorizationService } from '../authorization/authorization.service';
import { Phys } from './model/phys';
import { Entity } from './model/entity';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public formSubmitted:boolean = false;
  public confirmPassword:string;
  public user = {
    phys: true,
    entity: false
  };
  constructor(private registration:AuthorizationService) { }

  public physData:Phys;
  public entityData:Entity;

  public switchUser() {
    this.user.phys = !this.user.phys;
    this.user.entity = !this.user.entity;
  }

  public onSubmit(form:NgForm) {
    this.formSubmitted = true;
    this.physData = {
      name: form.value.name,
      email: form.value.email,
      tel: form.value.tel,
      password: form.value.password
    };

    if ((this.confirmPassword != this.physData.password) || form.invalid) {
      return;
    }

    if (form.value.company != undefined) {
      this.entityData = new Entity(this.physData, form.value.company, form.value.inn)
      this.registration.registerEntity(this.entityData);
      this.formSubmitted = false;
      form.reset();
      return;
    }
    
    this.registration.registerPhys(this.physData);
    this.formSubmitted = false;
    form.reset();
  };

  ngOnInit() {
  }

}
