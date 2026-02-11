import { Clef } from "./clef.type";
import { Note } from "./note.type";

export interface NoteModel {
  note: Note;
  clef: Clef;
}