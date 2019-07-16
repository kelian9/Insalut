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
  
  public registerPhys(user:Phys) {
    this.phys = user;
    console.log(this.phys);
  }

  public registerEntity(user:Entity) {
    this.entity = user;
    console.log(this.entity);
  }

  public signIn(userData:UserData) {
    console.log(userData);
  }
}
