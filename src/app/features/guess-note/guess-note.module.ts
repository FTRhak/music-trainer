import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { GuessNoteGameplay } from './components/guess-note-gameplay/guess-note-gameplay';
import { GuessNoteSetup } from './components/guess-note-setup/guess-note-setup';
import { PageGuessNoteComponent } from './components/page-guess-note/page-guess-note.component';

export const routes: Routes = [
    {
        path: '',
        component: PageGuessNoteComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormField
  ],
  providers: [provideRouter(routes)],
  declarations: [PageGuessNoteComponent, GuessNoteSetup, GuessNoteGameplay]
})
export class GuessNoteModule { }
