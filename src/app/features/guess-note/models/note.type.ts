export enum Note {
  C1 = 'C1',
  D1 = 'D1',
  E1 = 'E1',
  F1 = 'F1',
  G1 = 'G1',
  A1 = 'A1',
  B1 = 'B1',
  C2 = 'C2',
  D2 = 'D2',
  E2 = 'E2',
  F2 = 'F2',
  G2 = 'G2',
  A2 = 'A2',
  B2 = 'B2',
  /*C3 = 'C3',
  D3 = 'D3',
  E3 = 'E3',
  F3 = 'F3',
  G3 = 'G3',
  A3 = 'A3',
  B3 = 'B3',
  C4 = 'C4',
  D4 = 'D4',
  E4 = 'E4',
  F4 = 'F4',
  G4 = 'G4',
  A4 = 'A4',
  B4 = 'B4',*/
}

export type NoteName = 'do' | 're' | 'mi' | 'fa' | 'sol' | 'la' | 'si';

export type NoteNameMap = { [key in Note]: NoteName };

export const NoteNames: NoteNameMap = {
  [Note.C1]: 'do',
  [Note.D1]: 're',
  [Note.E1]: 'mi',
  [Note.F1]: 'fa',
  [Note.G1]: 'sol',
  [Note.A1]: 'la',
  [Note.B1]: 'si',
  [Note.C2]: 'do',
  [Note.D2]: 're',
  [Note.E2]: 'mi',
  [Note.F2]: 'fa',
  [Note.G2]: 'sol',
  [Note.A2]: 'la',
  [Note.B2]: 'si',
};

export const NoteValues = Object.values(Note);
