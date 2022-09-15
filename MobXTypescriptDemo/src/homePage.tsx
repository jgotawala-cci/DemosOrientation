import {observer} from 'mobx-react';
import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Divider, Text} from 'react-native-elements';
import {Color, Scale} from './appConst';
import NewNoteForms from './newNoteForms';
import {useNotesStore} from './noteContext';

const HomePage = observer(() => {
  const noteStore: any = useNotesStore();

  const onRemove = (id: string) => {
    noteStore.removeNote(id);
  };

  return (
    <View>
      <Text style={styles.titleStyle}>{'Typescript MobX Demo'}</Text>
      <Divider style={styles.dividerStyle} />
      <Text style={styles.headerStyle}>{'Some Notes'}</Text>
      <NewNoteForms />
      <ScrollView>
        {noteStore?.notes?.map((item: any) => {
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
  titleStyle: {
    fontSize: Scale.titleFont,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: Scale.extraPadding,
  },
  dividerStyle: {marginBottom: Scale.extraPadding},
});

export default HomePage;
