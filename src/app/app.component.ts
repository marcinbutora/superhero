import { Component } from '@angular/core';
import { heroes } from './mock_data/superheroes';
import { Superhero } from './model/superhero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'superheroapp';
  allListToSave: Superhero[] = [];
  superheroesList: Superhero[] = heroes;
  termToSearch: string = "";

  constructor() {}

  ngOnInit(): void {
    this.allListToSave = this.superheroesList;
    console.log(this.allListToSave);
  }
}
