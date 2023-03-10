import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByRow'
})
export class FilterByRowPipe implements PipeTransform {

  transform(seats: any[], row: number): any[] {
    return seats.filter(seat => seat.row === row);
  }

}
