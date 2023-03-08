import { NgModule } from '@angular/core';
import {CommonModule, NgForOf, NgSwitch} from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MATERIAL_MODULES } from './material.module';
import {LayoutComponent} from "./components/layout/layout.component";
import {RouterLink, RouterOutlet} from "@angular/router";

const DECLARATIONS_AND_EXPORTS = [NavBarComponent,LayoutComponent];

const IMPORTS_AND_EXPORTS = [
  CommonModule,
  ...MATERIAL_MODULES,
];

@NgModule({
  declarations: DECLARATIONS_AND_EXPORTS,
  imports: [
    ...IMPORTS_AND_EXPORTS,
    RouterLink,
    RouterOutlet,

  ],
  exports: [...DECLARATIONS_AND_EXPORTS,...IMPORTS_AND_EXPORTS]
})
export class SharedModule { }
