import { Component, HostListener, OnInit, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { heroes } from './mock_data/superheroes';
import { Superhero } from './model/superhero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'SuperHero APP!';
  allListToSave: Superhero[] = [];
  superheroesList: Superhero[] = heroes;
  termToSearch: string = "";

  constructor() {}

  ngOnInit() {
    this.allListToSave = this.superheroesList;
  }
}
