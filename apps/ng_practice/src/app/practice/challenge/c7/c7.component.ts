import { Component } from '@angular/core';
import {fromEvent, map, Observable, pairwise, scan, share, startWith} from "rxjs";

@Component({
  selector: 'sr-c7',
  templateUrl: './c7.component.html',
  styleUrls: ['./c7.component.scss']
})
export class C7Component {
  scroll$: Observable<number>;

  direction$: Observable<string>;
  visible$: Observable<boolean>;
  constructor() {
    this.scroll$ = fromEvent(window, 'scroll').pipe(
      map(() => window.pageYOffset)
    );

    this.direction$ = this.scroll$.pipe(
      pairwise(),
      map(([prev, curr]) => (curr < prev ? 'up' : 'down'))
    );
    this.visible$ = this.direction$.pipe(
      scan((isVisible, direction) => {
        if (direction === 'up') {
          return true;
        } else if (direction === 'down' && isVisible) {
          return false;
        } else {
          return isVisible;
        }
      }, true),
    startWith(true)
    );
  }
}
