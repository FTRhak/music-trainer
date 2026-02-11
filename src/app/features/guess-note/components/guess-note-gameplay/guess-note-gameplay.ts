import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GuessNoteGameplaySetupModel } from '../../models';

@Component({
  selector: 'guess-note-gameplay',
  standalone: false,
  templateUrl: './guess-note-gameplay.html',
  styleUrl: './guess-note-gameplay.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuessNoteGameplay {
  public readonly gameplaySetup = input.required<GuessNoteGameplaySetupModel>();


  

  constructor() { }
}
