import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainersComponent } from './components/trainers.component';
import { provideRouter, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: TrainersComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [provideRouter(routes)],
  declarations: [TrainersComponent],
})
export class TrainersModule {}
