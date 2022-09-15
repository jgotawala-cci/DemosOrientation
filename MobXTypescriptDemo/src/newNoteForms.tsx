import React, {useState} from 'react';
import {Button} from 'react-native';
import {Input} from 'react-native-elements';
import {useNotesStore} from './noteContext';

const NewNoteForms = () => {
  const [noteText, setNoteText] = useState<string>('');
  const noteStore: any = useNotesStore();

  const addNote = () => {
    if (noteText !== '') {
      noteStore.addNote(noteText);
    }
  };

  return (
    <>
      <Input
        autoCompleteType
        defaultValue={noteText}
        onChangeText={value => setNoteText(value)}
      />
      <Button title="Add Note" onPress={() => addNote()} />
    </>
  );
};

export default NewNoteForms;
