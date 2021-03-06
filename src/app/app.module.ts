import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { PopularProductsComponent } from './main/popular-products/popular-products.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SearchComponent } from './search/search.component';
import { SliderComponent } from './main/slider/slider.component';
import { SalesComponent } from './sales/sales.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { RegistrationModule } from './registration/registration.module';
import { AuthorizationService } from './authorization/authorization.service';
import { FilterComponent } from './catalog/filter/filter.component';
import { CategoriesComponent } from './catalog/components/categories/categories.component';
import { ProductsComponent } from './catalog/components/products/products.component';
import { ProductCardComponent } from './catalog/components/product-card/product-card.component';
import { ProductDetailsComponent } from './catalog/components/product-details/product-details.component';
import { ProductsSliderComponent } from './catalog/components/products-slider/products-slider.component';
import { SlideComponent } from './main/slider/slide/slide.component';
import { ShoppingBasketComponent } from './catalog/components/shopping-basket/shopping-basket.component';
import { CorporationClientsComponent } from './corporation-clients/corporation-clients.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ContactsDataComponent } from './contacts-data/contacts-data.component';
import { CatalogService } from './catalog/model/catalog.service';
import { ReviewsComponent } from './reviews/reviews.component';
import { ShippingPaymentComponent } from './shipping-payment/shipping-payment.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { OrderComponent } from './order/order.component';
import { OrderContactDataComponent } from './order-contact-data/order-contact-data.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    PopularProductsComponent,
    CatalogComponent,
    SearchComponent,
    SliderComponent,
    SalesComponent,
    ModalComponent,
    FilterComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    ProductsSliderComponent,
    SlideComponent,
    ShoppingBasketComponent,
    CorporationClientsComponent,
    CertificatesComponent,
    ContactsDataComponent,
    ReviewsComponent,
    ShippingPaymentComponent,
    OrderInfoComponent,
    OrderComponent,
    OrderContactDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RegistrationModule
  ],
  providers: [
    AuthorizationService,
    CatalogService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
