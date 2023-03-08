import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChallengeComponent} from "./challenge/challenge.component";

const routes: Routes = [
  {
    path: '',
    component: ChallengeComponent,
    title: 'Challenge',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule {}
