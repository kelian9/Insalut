import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { PopularProductsComponent } from './main/popular-products/popular-products.component';
import { CatalogComponent } from './catalog/catalog.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchComponent } from './search/search.component';
import { SliderComponent } from './main/slider/slider.component';
import { SalesComponent } from './sales/sales.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { RegistrationModule } from './registration/registration.module';
import { AuthorizationService } from './authorization/authorization.service';
import { FilterComponent } from './catalog/filter/filter.component';

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
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RegistrationModule
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
