import React, {useCallback, useMemo, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {Scale} from '../../AppConst/appConst';
import {TRANSLATETEXT} from '../../AppTestFiles/en';

const expensiveCalculation = (num: number) => {
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const UseCallbackMemoScreen = () => {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount(c => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos(t => [...t, 'New Todo ' + todos?.length]);
  }, [todos]);

  return (
    <ScrollView>
      <View style={styles.containerStyle}>
        <Text>{TRANSLATETEXT.MyTodos}</Text>
        {todos?.map((todo, index) => {
          return <Text key={index}>{todo}</Text>;
        })}
        <Button
          title={TRANSLATETEXT.AddTodo}
          buttonStyle={styles.buttonStyle}
          onPress={() => addTodo()}
        />
        <Text>
          {TRANSLATETEXT.ExpensiveCalculation}
          {calculation}
        </Text>
        <Button
          title={TRANSLATETEXT.Increase}
          buttonStyle={styles.buttonStyle}
          onPress={() => increment()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  buttonStyle: {marginTop: Scale.Normal_Margin},
});

export default UseCallbackMemoScreen;
