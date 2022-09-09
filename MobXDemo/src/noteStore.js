export const createNotesStore = () => {
  return {
    notes: [],
    addNote(text) {
      this.notes.push({
        text,
        id: text,
      });
    },
    removeNote(id) {
      this.notes = this.notes.filter(note => note.id !== id);
    },
  };
};
