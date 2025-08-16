import { Component } from '@angular/core';
import { Card } from "../../common/card/card";
import { Api } from '../../api';

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {


  constructor(private api: Api) {}
  items:any[] = [];

  ngOnInit() {
    console.log("home component initialized");
    this.api.getproducts().then(product=> this.items=product);
      
    };
  }






