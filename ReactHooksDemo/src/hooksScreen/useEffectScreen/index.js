import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {Scale} from '../../AppConst/appConst';
import {TRANSLATETEXT} from '../../AppTestFiles/en';

const UseEffectScreen = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return (
    <View style={styles.containerStyle}>
      <Text>
        {TRANSLATETEXT.Count}
        {count}
      </Text>
      <Text>
        {TRANSLATETEXT.Calculation}
        {calculation}
      </Text>
      <Button
        title={TRANSLATETEXT.Increase}
        onPress={() => setCount(count + 1)}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  buttonStyle: {marginTop: Scale.Normal_Margin},
});

export default UseEffectScreen;
