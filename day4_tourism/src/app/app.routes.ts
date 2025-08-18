import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Component } from '@angular/core';
import { District } from './pages/district/district';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [

 {
  path: '',
  component: Home,
},
 {
  path: 'district',
  component: District,
},
 {
  path: 'contact',
  component: Contact,
}

];


