import { Component } from '@angular/core';

@Component({
  selector: 'products',
  templateUrl: './products.ng.html',
  styleUrls: ['./products.scss'],
})
export class ProductsComponent {
  products = generateProducts();
}

function generateProducts() {
  const products = [];
  for (let i = 0; i < names.length; i++) {
    products.push(new Product(i, names[i]));
  }
  return products;
}
