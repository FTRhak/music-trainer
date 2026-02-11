import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageGuessNoteComponent } from './components/page-guess-note/page-guess-note.component';
import { provideRouter, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        component: PageGuessNoteComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [provideRouter(routes)],
  declarations: [PageGuessNoteComponent]
})
export class GuessNoteModule { }
