import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'product',
  templateUrl: 'product.ng.html',
  styleUrls: ['./product.scss'],
})
export class ProductComponent {
  product: Product;
  constructor(private readonly activatedRoute: ActivatedRoute) {}
}
