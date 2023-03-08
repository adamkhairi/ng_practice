import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'sr-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  fillerNav: any[] = [
    {
      text: 'Home',
      link: [''],
      level: 1,
      children: [

      ]
    },
    {
      text: 'Pracice',
      link: ['practice'],
      level: 1,
      children: [
        {
          text: 'Practice 1',
          link: ['practice','practice-1'],
          levels: 2,
        }
      ]
    }

  ];

}
