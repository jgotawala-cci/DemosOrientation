/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import HomePage from './src/homePage';
import {NotesProvider} from './src/noteContext';

const App = () => {
  return (
    <View>
      <NotesProvider>
        <HomePage />
      </NotesProvider>
    </View>
  );
};

export default App;