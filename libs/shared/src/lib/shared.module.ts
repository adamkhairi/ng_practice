import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {MATERIAL_MODULES} from './material.module';
import {LayoutComponent} from "./components/layout/layout.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

const DECLARATIONS_AND_EXPORTS = [NavBarComponent, LayoutComponent];

const IMPORTS_AND_EXPORTS = [
  CommonModule,
  ReactiveFormsModule,
  ...MATERIAL_MODULES,
];

@NgModule({
  declarations: DECLARATIONS_AND_EXPORTS,
  imports: [
    ...IMPORTS_AND_EXPORTS,
    RouterLink,
    RouterOutlet,

  ],
  exports: [...DECLARATIONS_AND_EXPORTS, ...IMPORTS_AND_EXPORTS]
})
export class SharedModule {
}
