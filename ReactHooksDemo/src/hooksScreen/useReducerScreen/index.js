import React, {useEffect, useReducer, useRef, useState} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import {Normal_Margin} from '../../AppConst/appConst';
import {TRANSLATETEXT} from '../../AppTestFiles/en';
import {actionCreators, reducer, initialState} from '../reducer/todo';

const UseReducerScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState('');

  const onAdd = () => {
    if (todo !== '') {
      dispatch(actionCreators.add(todo));
      setTodo('');
    }
  };

  const onRemove = id => {
    dispatch(actionCreators.remove(id));
  };

  return (
    <View style={styles.containerStyle}>
      <Input
        placeholder={'Type a todo, then hit enter!'}
        defaultValue={todo}
        onChangeText={value => setTodo(value)}
      />
      <Button
        title={TRANSLATETEXT.AddTodo}
        buttonStyle={styles.buttonStyle}
        onPress={() => onAdd()}
      />
      <FlatList
        data={state.items}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => onRemove(item.id)}>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {flex: 1},
  buttonStyle: {marginTop: Normal_Margin},
  item: {
    marginBottom: 1,
    padding: 15,
    backgroundColor: 'green',
  },
  title: {
    color: 'white',
  },
});

export default UseReducerScreen;
