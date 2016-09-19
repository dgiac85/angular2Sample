//Component e Input sono dei decoratori
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HeroService } from '../../../services/hero.service';
import { Hero } from './hero';


@Component({
  templateUrl: 'app/components/heroes/hero/views/hero-detail.component.html',
  providers:[HeroService],
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;

  constructor(private heroService: HeroService, private route: ActivatedRoute){

  }

  ngOnInit():void{
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id).then(hero => this.hero = hero);
    });
  }

  goBack(): void {
    window.history.back();
  }
}
