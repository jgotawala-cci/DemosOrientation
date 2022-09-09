import {observer} from 'mobx-react';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import NewNoteForms from './newNoteForms';
import {useNotesStore} from './noteContext';

const HomePage = observer(() => {
  const noteStore = useNotesStore();

  const onRemove = id => {
    noteStore.removeNote(id);
  };

  return (
    <View>
      <Text style={styles.headerStyle}>Some Notes</Text>
      <NewNoteForms />
      <ScrollView>
        {noteStore.notes?.map(item => {
          return (
            <TouchableHighlight onPress={() => onRemove(item?.id)}>
              <Text style={styles.title}>{item?.text}</Text>
            </TouchableHighlight>
          );
        })}
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    color: 'black',
    padding: 10,
  },
  headerStyle: {fontSize: 20, color: 'black'},
});

export default HomePage;
