import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, map, mapTo, switchAll, switchMap, takeUntil} from "rxjs";

@Component({
  selector: 'sr-c10',
  templateUrl: './c10.component.html',
  styleUrls: ['./c10.component.scss']
})
export class C10Component implements OnInit,AfterViewInit {
  @ViewChild('palette') paletteRef!: ElementRef;
  circleLeft = 25;
  circleTop = 25;

  ngOnInit() {

  }

  onCircleMouseDown(event: MouseEvent) {
    event.preventDefault();
  }
red!: number;
green!: number;
blue!: number;
colorMsg !: string;
  ngAfterViewInit(): void {
    const palette = this.paletteRef.nativeElement;
    const circle = palette.querySelector('.circle');

    const mouseDown$ = fromEvent(circle, 'mousedown');
    const mouseMove$ = fromEvent(palette, 'mousemove');
    const mouseUp$ = fromEvent(palette, 'mouseup');

    const circleDrag$ = mouseDown$.pipe(
      switchMap((startEvent: any) => {
        startEvent.preventDefault();
        const startX = startEvent.clientX;
        const startY = startEvent.clientY;
        const circleStartLeft = circle.offsetLeft;
        const circleStartTop = circle.offsetTop;

        return mouseMove$.pipe(
          map((moveEvent: any) => {
            moveEvent.preventDefault();
            const left = circleStartLeft + moveEvent.clientX - startX;
            const top = circleStartTop + moveEvent.clientY - startY;
            return {left, top};
          }),
          takeUntil(mouseUp$)
        );
      })
    );

    circleDrag$.subscribe(({left, top}) => {
      this.circleLeft = Math.max(0, Math.min(100, (left / palette.offsetWidth) * 100));
      this.circleTop = Math.max(0, Math.min(100, (top / palette.offsetHeight) * 100));

      this.red = Math.round((this.circleLeft * 255) / 100);
      this.green = Math.round(((100 - this.circleTop) * 255) / 100);
      this.blue = 255;

      this.colorMsg = `Selected color: rgb(${this.red}, ${this.green}, ${this.blue})`;
      console.log('Selected color:', this.colorMsg);
    });
  }
}
