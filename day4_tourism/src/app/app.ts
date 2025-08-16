import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./common/navbar/navbar";
import { District } from "./pages/district/district";
import { Home } from "./pages/home/home";
import { Contact } from "./pages/contact/contact";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, District, Home, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  protected readonly title = signal('Tourism')
}

