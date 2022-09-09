import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {Button_Width, Normal_Margin} from '../../AppConst/appConst';
import {TRANSLATETEXT} from '../../AppTestFiles/en';
import useFetch from '../reducer/useFetch';

const CustomScreen = () => {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');
  console.log({data});
  return (
    <View style={styles.containerStyle}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Text style={styles.title}>{item?.title}</Text>
        )}
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
    marginBottom: 1,
    padding: 15,
  },
  title: {
    color: 'green',
  },
  buttonStyle: {marginTop: Normal_Margin, width: Button_Width},
});

export default CustomScreen;
