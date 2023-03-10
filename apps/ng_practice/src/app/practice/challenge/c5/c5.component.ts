import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, map, Observable, Subscription, takeWhile, timer} from "rxjs";

@Component({
  selector: 'sr-c5',
  templateUrl: './c5.component.html',
  styleUrls: ['./c5.component.css']
})
export class C5Component implements OnInit, OnDestroy{
  // private subscription!: Subscription;
  // public countdown$!: Observable<number>;
  // public count = 60;
  // public isRunning = false;
  //
  //
  //
  // public startCountdown(): void {
  //   if (!this.isRunning) {
  //     this.isRunning = true;
  //     this.countdown$ = timer(0, 1000).pipe(
  //       // takeWhile(() => this.count > 0),
  //       // map(() => --this.count)
  //
  //       map(index => this.count - index),
  //       takeWhile<number>(Boolean, true)
  //     );
  //     this.subscription = this.countdown$.subscribe();
  //   }
  // }
  //
  // public resetCountdown(): void {
  //   this.isRunning = false;
  //   this.count = 60;
  //   this.subscription.unsubscribe();
  // }
  //
  // ngOnDestroy(): void {
  //   this.subscription?.unsubscribe();
  // }
  //
  // ngOnInit(): void {
  //   this.startCountdown();
  // }



  countdown: number = 60; // initial value for the countdown
  subscription!: Subscription; // to keep track of the countdown subscription

  restartCountdown() {
    this.countdown = 60; // reset the countdown value
    this.subscription.unsubscribe(); // unsubscribe from the previous subscription
    const source = timer(0, 1000);
    this.subscription = source
    .pipe(
      takeWhile(() => this.countdown > 0)
    )
    .subscribe(() => {
      this.countdown--;
    });
  }

  ngOnInit() {
    const source = timer(0, 1000); // emit a value every second
    this.subscription = source
    .pipe(
      takeWhile(() => this.countdown > 0) // stop the countdown when it reaches 0
    )
    .subscribe(() => {
      this.countdown--;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
