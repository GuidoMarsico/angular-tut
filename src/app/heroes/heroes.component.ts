import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  this.clearBeforeMessages();
  this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
          heroes => this.heroes = heroes.sort((a: Hero, b: Hero): number => {
            if (a.power < b.power) {
                return 1;
              }
            if (a.power > b.power) {
              return -1; } return 0;
            }));
  }
  clearBeforeMessages(): void {
    this.heroService.clearMessage();
  }
}
