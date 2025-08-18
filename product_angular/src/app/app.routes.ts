import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Product } from './pages/product/product';
import { Contact } from './pages/contact/contact';
import { SingleProductPages } from './pages/single-product-pages/single-product-pages';

export const routes: Routes = [

{
    path: '',
    component: Home
},
{
    path: 'product',
    component:Product
},
{
    path: 'contact',
    component: Contact
},
{
    path: 'single-product/:id',
    component: SingleProductPages
}
];
