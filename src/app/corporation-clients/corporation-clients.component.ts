import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

const styles = '../styles/style.scss';

@Component({
  selector: 'app-corporation-clients',
  templateUrl: './corporation-clients.component.html',
  styleUrls: ['./corporation-clients.component.scss', styles]
})
export class CorporationClientsComponent implements OnInit {

  constructor() { }

  public formSubmitted:boolean = false;
  public onSubmit(form:NgForm) {
    this.formSubmitted = true;
    for (const key in form.controls) {
      if (form.controls[key].errors) {
        return;
      }
    }
    let clientData = {
      name: form.value.name,
      email: form.value.email,
      tel: form.value.tel,
      company: form.value.company,
      message: form.value.message
    };
    console.log(form);
    this.formSubmitted = false;
    form.reset();
  }

  ngOnInit() {
  }

}
