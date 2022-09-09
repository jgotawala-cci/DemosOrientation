import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {Button_Width, Normal_Margin} from '../../AppConst/appConst';
import {TRANSLATETEXT} from '../../AppTestFiles/en';

const UseStateScreen = () => {
  const [color, setColor] = useState('white');
  return (
    <View style={styles.containerStyle(color)}>
      <Button
        title={TRANSLATETEXT.Red}
        onPress={() => setColor('red')}
        buttonStyle={styles.buttonStyle}
      />
      <Button
        title={TRANSLATETEXT.Green}
        onPress={() => setColor('green')}
        buttonStyle={styles.buttonStyle}
      />
      <Button
        title={TRANSLATETEXT.White}
        onPress={() => setColor('white')}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: bgColor => {
    return {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: bgColor,
    };
  },
  buttonStyle: {marginTop: Normal_Margin, width: Button_Width},
});

export default UseStateScreen;
