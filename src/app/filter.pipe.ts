import { Pipe, PipeTransform } from '@angular/core';
import { Superhero } from './model/superhero';

@Pipe({
  name: 'filterSearch'
})
export class FilterPipe implements PipeTransform {

  transform(heroes: Superhero[] | null, termToSearch: string) {
    if (termToSearch == "") {
      return heroes;
    }
    
    return heroes?.filter(function(item) {
      return (
        item.name.toLowerCase().includes(termToSearch.toLowerCase()) ||
        item.biography.fullName.toLowerCase().includes(termToSearch.toLowerCase()) ||
        item.biography.aliases.toLocaleString().toLowerCase().includes(termToSearch.toLowerCase()) ||
        item.work.base.toLowerCase().includes(termToSearch.toLowerCase()) ||
        item.work.occupation.toLowerCase().includes(termToSearch.toLowerCase())
    )})
  }
}
