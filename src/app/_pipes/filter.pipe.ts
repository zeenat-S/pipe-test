import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //transform method is like takes an input and transforms it into thedesired form or format and outouts it
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter((it) => {
      return it.name.toLowerCase().includes(searchText);
    });
  }

}
