import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-fight',
  templateUrl: './hero-fight.component.html',
  styleUrls: ['./hero-fight.component.css']
})
export class HeroFightComponent implements OnInit {

  constructor(public heroService: HeroService) { }

  heroes: Hero[];

  hero1: Hero;
  hero2: Hero;

  winner: Hero;


  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  fight(): void {
    if (this.hero1.power > this.hero2.power) {
      this.winner = this.hero1;
    } else {
      this.winner = this.hero2;
    }
  }

}
