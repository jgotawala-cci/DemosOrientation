import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Text} from 'react-native-elements';
import {Color, Scale} from '../../AppConst/appConst';
import useFetch from '../reducer/useFetch';

const CustomScreen = () => {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');
  return (
    <View style={styles.containerStyle}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Text style={styles.title}>{item?.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginBottom: Scale.Divider_Margin,
    padding: Scale.Extra_Padding,
  },
  title: {
    color: Color.Green,
  },
  buttonStyle: {marginTop: Scale.Normal_Margin, width: Scale.Button_Width},
});

export default CustomScreen;
