import { Injectable } from '@angular/core';
import { Phys } from '../registration/model/phys';
import { Entity } from '../registration/model/entity';
import { UserData } from '../modal/model/userData';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  private phys:Phys;
  private entity: Entity;
  
  public register(user:Phys|Entity) {
    if ((<Entity>user).company != undefined) {
      //запрос с регистрацией юр.лица
      console.log("Юр. лицо", user);
      return;
    }
    //запрос с регистрацией физ.лица
    console.log("Физ. лицо", user);
    return;
  }

  public signIn(userData:UserData) {
    console.log(userData);
  }
}
