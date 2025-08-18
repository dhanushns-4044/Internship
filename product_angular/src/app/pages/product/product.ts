import { Component } from '@angular/core';
import { Card } from "../../common/card/card";
import { Home } from "../home/home";

@Component({
  selector: 'app-product',
  imports: [Card, Home],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
product: any;

}
