import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subject, takeUntil} from "rxjs";

interface Subtitle {
  text: string;
  duration: number;
}

const SUBTITLES:Subtitle[] = [
  {
    text: "It had a begining",
    duration: 1000
  },
  {
    text: "It must have an end",
    duration: 1500
  },
  {
    text: "Don't leave me in darkness",
    duration: 1000
  },
  {
    text: "Please give me your hand",
    duration: 2000
  }
];
@Component({
  selector: 'sr-c9',
  templateUrl: './c9.component.html',
  styleUrls: ['./c9.component.scss']
})
export class C9Component implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  private subtitles: Subtitle[] = SUBTITLES;
  private currentSubtitleIndex = 0;
  public currentSubtitle: Subtitle | undefined;
  public upcomingSubtitle: Subtitle | undefined;

  ngOnInit() {
    interval(this.subtitles[this.currentSubtitleIndex].duration)
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => {
      this.currentSubtitleIndex++;
      if (this.currentSubtitleIndex >= this.subtitles.length) {
        this.currentSubtitleIndex = 0;
      }
      this.currentSubtitle = this.subtitles[this.currentSubtitleIndex];
      this.upcomingSubtitle = this.subtitles[this.currentSubtitleIndex + 1];
      if (!this.upcomingSubtitle) {
        this.upcomingSubtitle = this.subtitles[0];
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
