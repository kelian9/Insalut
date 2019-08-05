import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CatalogComponent } from './catalog/catalog.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductsComponent } from './catalog/components/products/products.component';
import { CategoriesComponent } from './catalog/components/categories/categories.component';
import { ProductDetailsComponent } from './catalog/components/product-details/product-details.component';
import { ShoppingBasketComponent } from './catalog/components/shopping-basket/shopping-basket.component';
import { CorporationClientsComponent } from './corporation-clients/corporation-clients.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ContactsDataComponent } from './contacts-data/contacts-data.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ShippingPaymentComponent } from './shipping-payment/shipping-payment.component';
import { OrderComponent } from './order/order.component';
import { OrderContactDataComponent } from './order-contact-data/order-contact-data.component';

const catalogRoutes: Routes = [
  {path:'', component: CategoriesComponent},
  {path:'sets', component: ProductsComponent},
  {path:'big-salut', component: ProductsComponent},
  {path:'medium-salut', component: ProductsComponent},
  {path:'min-salut', component: ProductsComponent},
  {path:'candles', component: ProductsComponent},
  {path:'rocket', component: ProductsComponent},
  {path:'fountains', component: ProductsComponent},
  {path:'bag-butterfly', component: ProductsComponent},
  {path:'firecrackers', component: ProductsComponent},
  {path:'ball', component: ProductsComponent}
];

const orderRoutes: Routes = [
  {path: '', redirectTo:'/order/contact-data', pathMatch:'full'},
  {path: 'contact-data', component:OrderContactDataComponent},
  {path: 'payment', component:ShippingPaymentComponent}
];

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'catalog/:category/:id', component: ProductDetailsComponent},
  {path: 'catalog/', component: CatalogComponent},
  {path: 'catalog', component: CatalogComponent, children: catalogRoutes},
  {path: 'shopping-basket', component: ShoppingBasketComponent},
  {path: 'order', component: OrderComponent, children: orderRoutes},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'corporative-clients', component: CorporationClientsComponent},
  {path: 'certificates', component: CertificatesComponent},
  {path: 'contacts-data', component: ContactsDataComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
