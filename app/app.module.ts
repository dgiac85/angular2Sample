/*
This is the entry point to your application.
Since the QuickStart application is a web application that runs in a browser,
 your root module needs to import the BrowserModule from @angular/platform-browser to the imports array.
This is the smallest amount of Angular that is needed for a minimal application to run in the browser.
*/

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }        from './components/app/app.component';
import { HeroesComponent }   from './components/heroes/heroes.component';
import { HeroDetailComponent }   from './components/heroes/hero/hero-detail.component';
import { DashboardComponent }      from './components/dashboard/dashboard.component';
import { routing } from './routing/app.routing';

//in declarations inserisco i moduli di cui ho bisogno
@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent,HeroesComponent,HeroDetailComponent,DashboardComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
