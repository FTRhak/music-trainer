import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/trainers/trainers.module').then(m => m.TrainersModule),
        pathMatch: 'full'
    },
    {
        path: 'guess-note',
        loadChildren: () => import('./features/guess-note/guess-note.module').then(m => m.GuessNoteModule),
    }
];
