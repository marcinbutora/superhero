import { Pipe, PipeTransform } from '@angular/core';
import { Superhero } from './model/superhero';

@Pipe({
  name: 'filterSearch'
})
export class FilterPipe implements PipeTransform {

  transform(heroes: Superhero[] | undefined, termToSearch: string) {
    if (termToSearch === undefined) return heroes;
    return heroes?.filter(function(item) {
      return (
        item.name.toLowerCase().includes(termToSearch.toLowerCase()))
    })
  }
}
