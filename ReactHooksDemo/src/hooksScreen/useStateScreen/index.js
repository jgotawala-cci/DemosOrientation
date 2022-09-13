import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {Color, Scale} from '../../AppConst/appConst';
import {TRANSLATETEXT} from '../../AppTestFiles/en';

const UseStateScreen = () => {
  const [color, setColor] = useState(Color.White);
  return (
    <View style={styles.containerStyle(color)}>
      <Button
        title={TRANSLATETEXT.Red}
        onPress={() => setColor(Color.Red)}
        buttonStyle={styles.buttonStyle}
      />
      <Button
        title={TRANSLATETEXT.Green}
        onPress={() => setColor(Color.Green)}
        buttonStyle={styles.buttonStyle}
      />
      <Button
        title={TRANSLATETEXT.White}
        onPress={() => setColor(Color.White)}
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
  buttonStyle: {marginTop: Scale.Normal_Margin, width: Scale.Button_Width},
});

export default UseStateScreen;
