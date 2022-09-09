import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {Normal_Margin} from '../AppConst/appConst';
import {TRANSLATETEXT} from '../AppTestFiles/en';
import {RoutesName} from '../Routes/route';

const HomeScreen = ({navigation}) => {
  const onClick = route => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.containerStyle}>
      <Button
        title={TRANSLATETEXT.UseState}
        onPress={() => onClick(RoutesName.USESTATE)}
      />
      <Button
        title={TRANSLATETEXT.UseEffect}
        buttonStyle={styles.buttonStyle}
        onPress={() => onClick(RoutesName.USEEFFECT)}
      />
      <Button
        title={TRANSLATETEXT.UseContext}
        buttonStyle={styles.buttonStyle}
        onPress={() => onClick(RoutesName.USECONTEXT)}
      />
      <Button
        title={TRANSLATETEXT.UseRef}
        buttonStyle={styles.buttonStyle}
        onPress={() => onClick(RoutesName.USEREF)}
      />
      <Button
        title={TRANSLATETEXT.UseReducer}
        buttonStyle={styles.buttonStyle}
        onPress={() => onClick(RoutesName.USEREDUCER)}
      />
      <Button
        title={TRANSLATETEXT.UseCallback}
        buttonStyle={styles.buttonStyle}
        onPress={() => onClick(RoutesName.USECALLBACKMEMO)}
      />
      <Button
        title={TRANSLATETEXT.CustomHook}
        buttonStyle={styles.buttonStyle}
        onPress={() => onClick(RoutesName.CUSTOM)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  buttonStyle: {marginTop: Normal_Margin},
});

export default HomeScreen;
