import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Text} from 'react-native-elements';
import {Scale} from '../../AppConst/appConst';
import {TRANSLATETEXT} from '../../AppTestFiles/en';

const UseRefScreen = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const previousInputValue = useRef('');
  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);
  return (
    <View style={styles.containerStyle}>
      <Input
        autoCompleteType
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
  buttonStyle: {marginTop: Scale.Normal_Margin},
});

export default UseRefScreen;
