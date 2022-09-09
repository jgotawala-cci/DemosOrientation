import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Text} from 'react-native-elements';
import {Normal_Margin} from '../../AppConst/appConst';
import {TRANSLATETEXT} from '../../AppTestFiles/en';

const UseRefScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const previousInputValue = useRef('');
  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);
  return (
    <View style={styles.containerStyle}>
      <Input
        defaultValue={inputValue}
        onChangeText={value => setInputValue(value)}
      />
      <Text>
        {TRANSLATETEXT.Current}
        {inputValue}
      </Text>
      <Text>
        {TRANSLATETEXT.Previous}
        {previousInputValue.current}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  buttonStyle: {marginTop: Normal_Margin},
});

export default UseRefScreen;
