import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Scale} from './src/appConst';
import HomePage from './src/homePage';
import {NotesProvider} from './src/noteContext';

const App = () => {
  return (
    <View style={styles.containerStyle}>
      <NotesProvider>
        <HomePage />
      </NotesProvider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: Platform.OS === 'ios' ? Scale.iPhoneTopMargin : 0,
  },
});
