import React, {useState} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {Button} from 'react-native-elements';
import {Color, Scale} from '../../AppConst/appConst';
import {TRANSLATETEXT} from '../../AppTestFiles/en';

const UseStateScreen = () => {
  const [color, setColor] = useState<string>(Color.White);
  return (
    <View style={ContainerStyle(color)}>
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

const ContainerStyle = (bgColor: string): ViewStyle => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: bgColor,
});

const styles = StyleSheet.create({
  buttonStyle: {marginTop: Scale.Normal_Margin, width: Scale.Button_Width},
});

export default UseStateScreen;
