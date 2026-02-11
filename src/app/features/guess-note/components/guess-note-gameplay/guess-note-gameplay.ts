import { ChangeDetectionStrategy, Component, effect, input, signal, ViewEncapsulation } from '@angular/core';
import { map, take, timer } from 'rxjs';
import { ClefValues, GuessNoteGameplaySetupModel, Note, NoteModel, NoteValues } from '../../models';



@Component({
  selector: 'guess-note-gameplay',
  standalone: false,
  templateUrl: './guess-note-gameplay.html',
  styleUrl: './guess-note-gameplay.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GuessNoteGameplay {
  public readonly gameplaySetup = input.required<GuessNoteGameplaySetupModel>();

  public gameplay = signal<NoteModel | null>(null);


  constructor() {
    effect(() => {
      const gameplaySetup = this.gameplaySetup();
      console.log('gameplaySetup', gameplaySetup);
      console.log(NoteValues)
      timer(0, gameplaySetup.timeToGuess * 100)
        .pipe(
          take(gameplaySetup.numberOfNotes),
          map((el) => {
            console.log('el', el);
            return {
              note: Note.F1,//NoteValues[Math.floor(Math.random() * NoteValues.length)],
              clef: ClefValues[Math.floor(Math.random() * ClefValues.length)],
            } as NoteModel;
          })
        )
        .subscribe((note: NoteModel) => {
          console.log('note', note);
          this.gameplay.set(note);
        });
    });
  }
}
