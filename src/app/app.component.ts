import { Component } from '@angular/core';

const styles = './styles/style.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', styles]
})
export class AppComponent {
  title = 'insalut';
  public placeholder:string = "Москва";
  public menu:boolean = false;
  public menuOpen() {
    this.menu = !this.menu;
  }
  public modal:boolean = false;

  public openModal() {
    this.modal = !this.modal;
  }
}
