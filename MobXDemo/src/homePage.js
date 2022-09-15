import {observer} from 'mobx-react';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Color, Scale} from './appConst';
import NewNoteForms from './newNoteForms';
import {useNotesStore} from './noteContext';

const HomePage = observer(() => {
  const noteStore = useNotesStore();

  const onRemove = id => {
    noteStore.removeNote(id);
  };

  return (
    <View>
      <Text style={styles.headerStyle}>{'Some Notes'}</Text>
      <NewNoteForms />
      <ScrollView>
        {noteStore?.notes?.map(item => {
          return (
            <TouchableOpacity key={item?.id} onPress={() => onRemove(item?.id)}>
              <Text style={styles.title}>{item?.text}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  title: {
    fontSize: Scale.titleFonst,
    color: Color.Black,
    padding: Scale.normalPadding,
  },
  headerStyle: {fontSize: Scale.headerFont, color: Color.Black},
});

export default HomePage;
