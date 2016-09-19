import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../heroes/hero/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/components/dashboard/views/dashboard.component.html',
  styleUrls:['app/components/dashboard/styles/dashboard.component.css'],
  providers:[HeroService]
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private router:Router,private heroService: HeroService) { }

  ngOnInit(): void { //ngOnInit restituisce void!
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(0, 4));
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
