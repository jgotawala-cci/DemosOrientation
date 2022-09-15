import uuid from 'react-native-uuid';
export const createNotesStore = () => {
  return {
    notes: [],
    addNote(text) {
      this.notes.push({
        text,
        id: uuid.v4(),
      });
    },
    removeNote(id) {
      this.notes = this.notes.filter(note => note.id !== id);
    },
  };
};
