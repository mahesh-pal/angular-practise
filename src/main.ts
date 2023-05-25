import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app/app.component';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/app/home.component';
import { ProductsComponent } from './app/app/products.component';
import { ProductComponent } from './app/app/product.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,

        children: [{ path: ':id', component: ProductComponent }],
      },
    ],
  },
];

@Component({
  selector: 'my-app',
  templateUrl: './main.html',
})
export class App {
  name = 'Angular';
}

@NgModule({
  declarations: [
    App,
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
  ],
  imports: [CommonModule, RouterModule.forRoot(routes), BrowserModule],
  providers: [],
  bootstrap: [App],
})
class MainModule {}

platformBrowserDynamic().bootstrapModule(MainModule);
