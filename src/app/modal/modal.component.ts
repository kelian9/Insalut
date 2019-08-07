import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserData } from './model/userData';
import { AuthorizationService } from '../authorization/authorization.service';

const styles = '../styles/style.scss';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss', styles]
})
export class ModalComponent implements OnInit {
  @Output() close:EventEmitter<boolean> = new EventEmitter();

  constructor(private authorization:AuthorizationService) { }

  public closeModal() {
    this.close.emit();
  }
  public openRegistration() {
    this.close.emit();
  }

  public userData:UserData;

  public formSubmitted:boolean = false;

  // Проверка валидности формы, а затем отправка валидных данных через сервис авторизации на backend
  // Сброс полей формы
  public onSubmit(form:NgForm) {
    this.formSubmitted = true;
    if(form.invalid == true) {
      return;
    }
    this.userData = new UserData(form.value.email, form.value.password);
    this.authorization.signIn(this.userData);
    this.formSubmitted = false;
    form.reset();
  }
  ngOnInit() {
  }

}
