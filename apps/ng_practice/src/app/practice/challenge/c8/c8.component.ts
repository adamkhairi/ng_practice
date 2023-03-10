import {Component} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  mapTo,
  Observable,
  of,
  OperatorFunction,
  scan,
  startWith,
  switchMap
} from "rxjs";
import {FormControl} from "@angular/forms";

function requestBackendEmulation(search: string): Observable<readonly string[]> {
  console.log('backend called');

  const tests = ['test1', 'test2', 'test3'].filter(test => !!search && test.startsWith(search));

  if (tests.length) {
    return of(tests);
  }

  if (search.startsWith('1')) {
    return of(['125', '12', '199']);
  }

  return of([]);
}

// TODO: code this operator function
export function smartSearch<T>(
  _getSearchFunction: (search: string) => Observable<readonly T[]>,
  _searchDebouceTimeMs: number = 400,
): OperatorFunction<string, readonly T[] | null> {
  return source => source.pipe(
    debounceTime(_searchDebouceTimeMs),
    scan((previousSearched, current) => {
      return previousSearched !== '' && current.startsWith(previousSearched)
        ? previousSearched
        : current;
    }, ''),
    distinctUntilChanged(),
    switchMap(value => _getSearchFunction(value).pipe(startWith(null))),
    startWith([])
  );
}

const cachedResults: string[] = [];

@Component({
  selector: 'sr-c8',
  templateUrl: './c8.component.html',
  styleUrls: ['./c8.component.scss']
})
export class C8Component {
  readonly control = new FormControl('');

  readonly items$ = this.control.valueChanges.pipe(
    //smartSearch(requestBackendEmulation)
  );

  readonly filterValue = (item: string, value: string): boolean => item.startsWith(value);

  readonly emptyArray = [];
}
