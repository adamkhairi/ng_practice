import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Observer, repeatWhen, Subject, takeUntil, timer} from "rxjs";

@Component({
  selector: 'sr-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent<T> implements OnInit {
  @Input()
  observer!: Observer<T>;

  private mouseEnterSubject = new Subject<void>();
  private mouseLeaveSubject = new Subject<void>();

  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.elementRef.nativeElement.addEventListener("mouseenter", () => {
      this.mouseEnterSubject.next();
    });
    this.elementRef.nativeElement.addEventListener("mouseleave", () => {
      this.mouseLeaveSubject.next();
    });
  }

  ngOnInit() {
    timer(3000).pipe(
      takeUntil(this.mouseEnterSubject),
      repeatWhen(() => this.mouseLeaveSubject)
    ).subscribe(() => {
      this.close();
    });
  }

  close() {
    this.observer.complete();
  }
}