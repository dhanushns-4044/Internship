import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../../api';


@Component({
  selector: 'app-single-product-pages',
  imports: [],
  templateUrl: './single-product-pages.html',
  styleUrl: './single-product-pages.css'
})
export class SingleProductPages {
card: any;
  constructor(private api:Api,private route: ActivatedRoute) {}

  product: any;

  ngOnInit() {
    let id=this.route.snapshot.params['id'];
  
    this.api.getproductbyid(id).then(products =>this.product=products); 
}
}
