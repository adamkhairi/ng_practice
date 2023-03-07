import { NgModule } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MATERIAL_MODULES } from './material.module';

const DECLARATIONS_AND_EXPORTS = [NavBarComponent];

const IMPORTS_AND_EXPORTS = [

  NgSwitch,
  ...MATERIAL_MODULES
];

@NgModule({
  declarations: DECLARATIONS_AND_EXPORTS,
  imports: [
    ...IMPORTS_AND_EXPORTS,
  ],
  exports: [...DECLARATIONS_AND_EXPORTS,...IMPORTS_AND_EXPORTS]
})
export class SharedModule { }
