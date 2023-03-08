import { NgModule } from '@angular/core';
import { ChallengeComponent } from './challenge/challenge.component';
import {SharedModule} from "../../../../../libs/shared/src";
import {PracticeRoutingModule} from "./practice-routing.module";
import { C1Component } from './challenge/c1/c1.component';
import { C2Component } from './challenge/c2/c2.component';



@NgModule({
  declarations: [
    ChallengeComponent,
    C1Component,
    C2Component
  ],
  imports: [
    SharedModule,
    PracticeRoutingModule
  ]
})
export class PracticeModule { }
