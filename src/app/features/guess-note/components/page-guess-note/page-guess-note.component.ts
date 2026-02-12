import { Component, OnInit, signal } from '@angular/core';
import { GuessNoteGameplaySetupModel } from '../../models';

@Component({
  selector: 'app-page-guess-note',
  standalone: false,
  templateUrl: './page-guess-note.component.html',
  styleUrls: ['./page-guess-note.component.scss'],
})
export class PageGuessNoteComponent implements OnInit {
  public readonly isPlaying = signal(false);
  public readonly gameplaySetup = signal<GuessNoteGameplaySetupModel | null>(
    null,
  );

  constructor() {}

  ngOnInit() {}

  public onStartGame(ev: GuessNoteGameplaySetupModel) {
    this.gameplaySetup.set(ev);
    this.isPlaying.set(true);
  }
}
