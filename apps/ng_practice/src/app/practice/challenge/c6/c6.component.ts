import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, map, Observable, share, startWith, Subject} from "rxjs";

interface Seat {
  row: number;
  number: number;
  price: number;
  selected: boolean;
}


@Component({
  selector: 'sr-c6',
  templateUrl: './c6.component.html',
  styleUrls: ['./c6.component.scss']
})
export class C6Component {
  seats: Seat[] = [
    { row: 1, number: 1, price: 10, selected: false },
    { row: 1, number: 2, price: 10, selected: false },
    { row: 1, number: 3, price: 10, selected: false },
    { row: 2, number: 1, price: 10, selected: false },
    { row: 2, number: 2, price: 10, selected: false },
    { row: 2, number: 3, price: 10, selected: false },
    { row: 3, number: 1, price: 15, selected: false },
    { row: 3, number: 2, price: 15, selected: false },
    { row: 3, number: 3, price: 15, selected: false }
  ];

  selectedSeats$: Observable<Seat[]>;
  total$: Observable<number>;

  private selectedSeatsSubject = new BehaviorSubject<Seat[]>([]);

  constructor() {
    this.selectedSeats$ = this.selectedSeatsSubject.asObservable();

    this.total$ = this.selectedSeats$.pipe(
      map((seats) => seats.reduce((total, seat) => total + seat.price, 0)),
      startWith(0),
      share()
    );
  }

  selectSeat(seat: Seat): void {
    const updatedSeats = this.seats.map((s) => {
      if (s === seat) {
        return { ...s, selected: !s.selected };
      } else {
        return s;
      }
    });

    this.seats = updatedSeats;
    this.selectedSeatsSubject.next(updatedSeats.filter((s) => s.selected));
  }

  buyTickets(): void {
    const selectedSeats = this.selectedSeatsSubject.getValue();

    selectedSeats.forEach((seat) => {
      const index = this.seats.findIndex((s) => s === seat);
      this.seats[index] = { ...seat, selected: false };
    });

    this.selectedSeatsSubject.next([]);
  }
}
