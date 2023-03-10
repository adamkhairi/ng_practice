import { NgModule } from '@angular/core';
import { ChallengeComponent } from './challenge/challenge.component';
import {SharedModule} from "../../../../../libs/shared/src";
import {PracticeRoutingModule} from "./practice-routing.module";
import { C1Component } from './challenge/c1/c1.component';
import { C2Component } from './challenge/c2/c2.component';
import { C3Component } from './challenge/c3/c3.component';
import {ReactiveFormsModule} from "@angular/forms";
import { C4Component } from './challenge/c4/c4.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { C5Component } from './challenge/c5/c5.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import { C6Component } from './challenge/c6/c6.component';
import { FilterByRowPipe } from './challenge/c6/filter-by-row.pipe';
import { C7Component } from './challenge/c7/c7.component';
import { C8Component } from './challenge/c8/c8.component';
import { FilterPipe } from './challenge/c8/filter.pipe';
import { C9Component } from './challenge/c9/c9.component';



@NgModule({
  declarations: [
    ChallengeComponent,
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    C5Component,
    C6Component,
    FilterByRowPipe,
    C7Component,
    C8Component,
    FilterPipe,
    C9Component
  ],
  imports: [
    SharedModule,
    PracticeRoutingModule,

  ]
})
export class PracticeModule { }
