import { Component } from '@angular/core';
import {LoadingService} from "./loading.service";

@Component({
  selector: 'sr-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css'],
  providers: [LoadingService]
})
export class C4Component {
  loadingPercent = 0;
  loadingMessage !: string;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {

  }
  load() {
    this.loadingService.load().subscribe((value) => {
      if (typeof value === 'number') {
        this.loadingPercent = value;
      } else {
        this.loadingMessage = value;
      }
    });
  }
}
