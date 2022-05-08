import { Component } from '@angular/core';
import { ConnectService } from './connect.service';
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
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.allListToSave = this.superheroesList;
    console.log(this.allListToSave);
  }
}
