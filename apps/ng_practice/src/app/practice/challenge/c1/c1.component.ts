import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {filter, fromEvent, map, Observable} from "rxjs";

@Component({
  selector: 'sr-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss']
})
export class C1Component implements AfterViewInit,OnInit {
  @ViewChild('refElement') refElement!: ElementRef;
tagName: string ='None';

  focus$ !: Observable<any>;
ngOnInit() {
  this.focus$ = fromEvent(this.refElement?.nativeElement, 'focus').pipe(
  //filter(() => document.hasFocus()), // optional, to ensure the element is actually focused
  map((event: any) => {
    this.tagName = (event.target as HTMLElement).tagName;
        return event.target?.tagName
  })
);
  this.focus$.subscribe(tagName => this.tagName = tagName);
}

  ngAfterViewInit(): void {
  //   const focus$ = fromEvent(this.area.nativeElement, 'focus');
  //
  //   focus$
  //   .pipe(
  //     map((event:any) => {
  //       debugger
  //       this.tagName = (event.target as HTMLElement).tagName;
  //       return event.target?.tagName
  //     })
  //   )
  //   .subscribe((tagName: string) => {
  //     console.log(`Element with tag name "${tagName}" is focused.`);
  //
  //   });
   }
}
