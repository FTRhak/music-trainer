import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { GuessNoteGameplaySetupModel, GuessNoteSetupModel } from '../../models';

@Component({
  selector: 'guess-note-setup',
  standalone: false,
  templateUrl: './guess-note-setup.html',
  styleUrl: './guess-note-setup.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuessNoteSetup {
  private readonly guessNoteSetupModel = signal<GuessNoteSetupModel>({
    includeTrebleClef: true,
    includeBassClef: false,
    timeToGuess: '10',
    numberOfNotes: '10',
  });

  public readonly startGame = output<GuessNoteGameplaySetupModel>();

  public readonly timeCases = [1, 2, 3, 4, 5, 10, 20];
  public readonly numberOfNotesCases = [5, 10, 20, 30, 50];

  public readonly guessNoteSetupForm = form<GuessNoteSetupModel>(this.guessNoteSetupModel);

  public onSubmit(event: Event) {
    event.preventDefault();
    const formValue = this.guessNoteSetupForm().value();
    const gameplaySetup: GuessNoteGameplaySetupModel = {
      includeTrebleClef: formValue.includeTrebleClef,
      includeBassClef: formValue.includeBassClef,
      timeToGuess: Number(formValue.timeToGuess),
      numberOfNotes: Number(formValue.numberOfNotes),
    };
    this.startGame.emit(gameplaySetup);
  }
}
