import { Pipe, PipeTransform } from '@angular/core';
import { Evenemment } from './evenemment';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(events: Evenemment[],searchValue:String): Evenemment[] {
if(!events || !searchValue)  
{return events;
}
return events.filter(Evenemment => 
  Evenemment.categorie.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||

Evenemment.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) 
);
}

}
