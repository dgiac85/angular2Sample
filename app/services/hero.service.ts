import { Injectable } from '@angular/core';

import { HEROES } from '../constants/mock-heroes';
import { Hero } from '../components/heroes/hero/hero';

@Injectable()
export class HeroService {

  //OLD
  // getHeroes(): Hero[] {
  //   return HEROES;
  // } // stub

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve => setTimeout(resolve, 1000)).then(() => this.getHeroes());
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }

}
