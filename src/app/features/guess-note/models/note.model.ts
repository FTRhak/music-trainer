import { Clef } from './clef.type';
import { Note, NoteName, NoteNames } from './note.type';

export class NoteModel {
  public clef: Clef;
  public note: Note;
  public noteName: NoteName;

  constructor(clef: Clef, note: Note) {
    this.clef = clef;
    this.note = note;
    this.noteName = NoteNames[note];
  }
}

export class NoteSimpleModel {
  public note: Note;
  public noteName: NoteName;

  constructor(note: Note) {
    this.note = note;
    this.noteName = NoteNames[note];
  }
}
