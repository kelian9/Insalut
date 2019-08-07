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

  public userType = {
    phys: true,
    entity: false
  };

  public userPassword:string;
  constructor(private registration:AuthorizationService) { }

  public switchUser() {
    this.userType.phys = !this.userType.phys;
    this.userType.entity = !this.userType.entity;
  }

  public onSubmit(form:NgForm) {
    this.formSubmitted = true;
    this.userPassword = form.value.password;
    let user = {
      name: form.value.name,
      email: form.value.email,
      tel: form.value.tel,
      password: form.value.password,
      company: form.value.company,
      inn: form.value.inn
    };
    console.log(user.password);

    if ((this.confirmPassword != this.userPassword) || form.invalid) {
      return;
    }

    // if (form.value.company != undefined) {
    //   this.registration.register(new Entity(user.name, user.email, user.tel, user.password, user.company, user.inn));
    //   this.formSubmitted = false;
    //   form.reset();
    //   return;
    // }
    
    // this.registration.register(new Phys(user.name, user.email, user.tel, user.password));
    this.registration.register(user);
    this.formSubmitted = false;
    form.reset();
  };

  ngOnInit() {
  }

}
