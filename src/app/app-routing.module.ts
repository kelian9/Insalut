import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CatalogComponent } from './catalog/catalog.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductsComponent } from './catalog/components/products/products.component';
import { CategoriesComponent } from './catalog/components/categories/categories.component';
import { ProductDetailsComponent } from './catalog/components/product-details/product-details.component';

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

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'catalog/:category/:id', component: ProductDetailsComponent},
  {path: 'catalog/', component: CatalogComponent},
  {path: 'catalog', component: CatalogComponent, children: catalogRoutes},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
