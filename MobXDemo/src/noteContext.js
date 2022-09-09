import {useLocalObservable} from 'mobx-react';
import React, {createContext, useContext} from 'react';
import {createNotesStore} from './noteStore';

const NotesContext = createContext(null);

export const NotesProvider = ({children}) => {
  const noteStore = useLocalObservable(createNotesStore);
  return (
    <NotesContext.Provider value={noteStore}>{children}</NotesContext.Provider>
  );
};

export const useNotesStore = () => useContext(NotesContext);
