import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { map, Subscription, timer, timestamp } from 'rxjs';
import {
  Clef,
  GuessNoteGameplaySetupModel,
  NoteModel,
  NoteSimpleModel,
  NoteValues,
} from '../../models';

@Component({
  selector: 'guess-note-gameplay',
  standalone: false,
  templateUrl: './guess-note-gameplay.html',
  styleUrl: './guess-note-gameplay.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class GuessNoteGameplay implements AfterViewInit {
  public readonly COUNT_OF_CASES = 5;
  public readonly gameplaySetup = input.required<GuessNoteGameplaySetupModel>();

  private clefsToSelect: Clef[] = [];

  public readonly gameplay = signal<NoteModel | null>(null);
  public readonly countQuestionsPassed = signal<number>(0);

  public readonly notesToSelect = signal<NoteSimpleModel[]>([]);

  public readonly timer = signal<number>(0);
  private timer$: Subscription | null = null;

  public readonly isGameFinished = signal<boolean>(false);
  public readonly countCorrectAnswers = signal<number>(0);

  constructor() {
    effect(() => {
      const gameplaySetup = this.gameplaySetup();
      if (gameplaySetup.includeTrebleClef) {
        this.clefsToSelect.push(Clef.Treble);
      }
      if (gameplaySetup.includeBassClef) {
        this.clefsToSelect.push(Clef.Bass);
      }
      if (this.clefsToSelect.length === 0) {
        this.clefsToSelect.push(Clef.Treble);
      }
    });
  }

  ngAfterViewInit(): void {
    this.runQuestion();
  }

  private runQuestion() {
    this.timer$?.unsubscribe();
    const gameplaySetup = this.gameplaySetup();

    if (gameplaySetup.numberOfNotes <= this.countQuestionsPassed()) {
      this.isGameFinished.set(true);
      return;
    }

    const note = new NoteModel(
      this.clefsToSelect[Math.floor(Math.random() * this.clefsToSelect.length)],
      NoteValues[Math.floor(Math.random() * NoteValues.length)],
    );
    this.generateNotesToSelect(note);
    this.gameplay.set(note);
    this.countQuestionsPassed.update((value) => value + 1);

    const start = Date.now();
    this.timer$ = timer(0, 100)
      .pipe(
        timestamp(),
        map((data) => data.timestamp - start),
        map((value) => (value * 100) / (gameplaySetup.timeToGuess * 1000)),
      )
      .subscribe((value) => {
        this.timer.set(value);

        if (value >= 100) {
          this.runQuestion();
        }
      });
  }

  private generateNotesToSelect(note: NoteModel) {
    const shift = Math.floor(Math.random() * this.COUNT_OF_CASES);
    const noteIndex = NoteValues.indexOf(note.note);
    const notesToSelect: NoteSimpleModel[] = [];

    const startPosition = Math.min(
      Math.max(noteIndex - shift, 0),
      NoteValues.length - this.COUNT_OF_CASES,
    );

    for (let i = startPosition; i < startPosition + this.COUNT_OF_CASES; i++) {
      notesToSelect.push(new NoteSimpleModel(NoteValues[i]));
    }
    this.notesToSelect.set(notesToSelect);
  }

  public onSelectNote(note: NoteSimpleModel) {
    if (note.note === this.gameplay()?.note) {
      this.countCorrectAnswers.update((value) => value + 1);
    }
    this.runQuestion();
  }
}
