import uuid from 'react-native-uuid';

export const createNotesStore = () => {
  const noteCreate = (text: string, id: string | number[]) => {
    return {text: text, id: id};
  };
  const notes: any[] = [];
  return {
    notes,
    addNote(text: string) {
      this.notes.push(noteCreate(text, uuid.v4()));
    },
    removeNote(id: string) {
      this.notes = this.notes.filter((note: any) => note.id !== id);
    },
  };
};
