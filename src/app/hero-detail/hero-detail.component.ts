import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  private _hero: Hero;

  
  get hero() {
    return this._hero;
  }

  @Input()
  set hero( hero: Hero) {
    // to catch undefined hero 
    if(!hero) return;
    
    this._hero = hero;
    this._hero.name = 'XX' + this._hero.name; 
  }
  private _user:any;
  
  get user() {
    return this._user;
  }
  @Input() 
  set user( user:any) {
    // to catch undefined user 
    if(!user) return;
    this._user = user;
  }
  constructor() { }

  ngOnInit() {
    // this.selectedHero = this.hero;
    // Angular 2: Do something with @Input inside Component
    // https://stackoverflow.com/questions/34568213/angular-2-do-something-with-input-inside-component
  }

}
