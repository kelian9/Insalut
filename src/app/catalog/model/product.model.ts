import { ProductData } from './product-data.model';

export class Product {
    constructor(public id:number, public category:{category:string, translate:string}, public heading:string, public imgPath:string[], public data:ProductData, public price:number, public description:string) {}
}