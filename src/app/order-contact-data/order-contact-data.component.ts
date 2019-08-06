import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order-service/order.service';
import { NgForm } from '@angular/forms';
import { EntityContact } from './model/entity-contact.model';
import { PhysContact } from './model/phys-contact.model';

@Component({
  selector: 'app-order-contact-data',
  templateUrl: './order-contact-data.component.html',
  styleUrls: ['./order-contact-data.component.scss']
})
export class OrderContactDataComponent implements OnInit {

  constructor(private order:OrderService) { }

  public formSubmitted:boolean = false;

  public user = {
    phys: true,
    entity: false
  };
  public switchUser() {
    this.user.phys = !this.user.phys;
    this.user.entity = !this.user.entity;
  }

  public physContactData:PhysContact;
  public entityContactData:EntityContact;

  public onSubmit(form:NgForm) {
    this.formSubmitted = true;
    this.physContactData = {
      name: form.value.name,
      email: form.value.email,
      tel: form.value.tel
    };

    if (form.value.company != undefined) {
      this.entityContactData = new EntityContact(this.physContactData, form.value.company, form.value.inn);
      this.formSubmitted = false;
      form.reset();
      return;
    }
    
    // Then send this data
    this.formSubmitted = false;
    form.reset();
  };

  public contactPageActive:boolean;
  ngOnInit() {
    this.contactPageActive = true;
  }

}
