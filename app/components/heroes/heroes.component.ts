/*
Every Angular application has at least one component: the root component, named AppComponent here.
Components are the basic building blocks of Angular applications.
A component controls a portion of the screen—a view—through its associated template.
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero/hero';
import { HeroService } from '../../services/hero.service';

/*
The double curly braces tell our app to read the title and hero properties from ù
the component and render them. This is the "interpolation" form of one-way data binding.
*/


@Component({
  selector: 'my-heroes',
  templateUrl: 'app/components/heroes/views/heroes.component.html',
  styleUrls:['app/components/heroes/styles/heroes.component.css'],
  providers: [HeroService]

})
//We have to teach the injector how to make a HeroService by registering a
// HeroService provider. Do that by adding the following providers array property
// to the bottom of the component metadata in the @Component call.


export class HeroesComponent implements OnInit {

  heroes: Hero[]; //heroes sarà un array di heroes
  selectedHero: Hero;

  constructor(private router: Router, private heroService: HeroService){

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
   //OLD this.heroes = this.heroService.getHeroes();
   this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }



 }
