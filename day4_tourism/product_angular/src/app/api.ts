import { Injectable } from '@angular/core';
import { Product } from './pages/product/product';

@Injectable({
  providedIn: 'root'
})
export class Api {


  async getproducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    return await res.json();
  }
  async getproductbyid(id: string) {
    const res = await fetch('https://fakestoreapi.com/products/'+ id);
    return await res.json();
  }
  
}
