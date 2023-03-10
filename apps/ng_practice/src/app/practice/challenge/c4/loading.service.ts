import { Injectable } from '@angular/core';
import {map, mergeMap, Observable, of, take, timer} from "rxjs";

@Injectable()
export class LoadingService {

  load(): Observable<number|string> {
    const progressSteps = 10;
    const totalTime = 5000;
    const intervalTime = totalTime / progressSteps;

    return timer(0, intervalTime).pipe(
      take(progressSteps),
      map((step) => (step + 1) * 10),
      mergeMap((percent) => {
        if (percent > 100) {
          return of('Loading complete!');
        } else {
          return of(percent);
        }
      })
    );
  }
}
