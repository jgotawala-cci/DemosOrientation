import React, {useReducer, useState} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import {Color, Scale} from '../../AppConst/appConst';
import {TRANSLATETEXT} from '../../AppTestFiles/en';
import {actionCreators, reducer, initialState} from '../reducer/todo';

const UseReducerScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState<string>('');

  const onAdd = () => {
    if (todo !== '') {
      dispatch(actionCreators.add(todo));
    }
  };

  const onRemove = (id: string) => {
    dispatch(actionCreators.remove(id));
  };

  return (
    <View style={styles.containerStyle}>
      <Input
        autoCompleteType
        placeholder={'Type a todo'}
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
        keyExtractor={item => item?.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => onRemove(item?.id)}>
            <Text style={styles.title}>{item?.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {flex: 1},
  buttonStyle: {marginTop: Scale.Normal_Margin},
  item: {
    marginBottom: 1,
    padding: Scale.Extra_Padding,
    backgroundColor: Color.Green,
  },
  title: {
    color: Color.White,
  },
});

export default UseReducerScreen;
