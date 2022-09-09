import React, {useState} from 'react';
import {Button} from 'react-native';
import {Input} from 'react-native-elements';
import {useNotesStore} from './noteContext';

const NewNoteForms = () => {
  const [noteText, setNoteText] = useState('');
  const noteStore = useNotesStore();

  const addNote = () => {
    if (noteText !== '') {
      noteStore.addNote(noteText);
      setNoteText('');
    }
  };

  return (
    <>
      <Input
        defaultValue={noteText}
        onChangeText={value => setNoteText(value)}
      />
      <Button title="Add Note" onPress={() => addNote()} />
    </>
  );
};

export default NewNoteForms;
