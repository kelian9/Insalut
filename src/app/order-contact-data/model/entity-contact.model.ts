import { PhysContact } from './phys-contact.model';

export class EntityContact {
    constructor(public phys:PhysContact, public company:string, public inn:number) {}
}