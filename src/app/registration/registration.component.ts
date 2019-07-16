import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorizationService } from '../authorization/authorization.service';
import { Phys } from './model/phys';
import { Entity } from './model/entity';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss', '../styles/style.scss']
})
export class RegistrationComponent implements OnInit {

  public formSubmitted:boolean = false;
  public confirmPassword:string;
  public user = {
    phys: true,
    entity: false
  };
  constructor(private registration:AuthorizationService) { }

  public phys:Phys;
  public entity:Entity;

  public switchUser() {
    this.user.phys = !this.user.phys;
    this.user.entity = !this.user.entity;
  }

  public onSubmit(form:NgForm) {
    this.formSubmitted = true;
    this.phys = {
      name: form.value.name,
      email: form.value.email,
      tel: form.value.tel,
      password: form.value.password
    };

    if ((this.confirmPassword != this.phys.password) || form.invalid) {
      return;
    }

    if (form.value.company != undefined) {
      this.entity = new Entity(this.phys, form.value.company, form.value.inn)
      this.registration.registerEntity(this.entity);
      this.formSubmitted = false;
      form.reset();
      return;
    }
    
    this.registration.registerPhys(this.phys);
    this.formSubmitted = false;
    form.reset();
  };

  ngOnInit() {
  }

}
