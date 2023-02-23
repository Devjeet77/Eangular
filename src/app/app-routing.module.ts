import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { SearchComponent } from './components/search/search.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SingupComponent,
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  {
    path: 'cart',
    component: CartComponent,
    pathMatch: 'full',
  },

  {
    path: 'products',
    component: ProductsComponent,
    pathMatch: 'full',
  },

  {
    path: 'search',
    component: SearchComponent,
    pathMatch: 'full',
  },

  {
    path: 'payment',
    component: PaymentComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
