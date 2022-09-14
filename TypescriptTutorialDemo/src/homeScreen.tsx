import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {Scale} from './appConst';
import {RouteName} from './routes';

const HomeScreen = () => {
  const navigation = useNavigation();
  const onClick = (route: string): void => {
    navigation.navigate(route);
  };
  return (
    <View style={styles.containerStyle}>
      <Button
        title={'Variable Demo'}
        onPress={() => onClick(RouteName.VARIABLEDEMO)}
      />
      <Button
        title={'Function Demo'}
        onPress={() => onClick(RouteName.FUNCTIONDEMO)}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  buttonStyle: {marginTop: Scale.Normal_Margin},
});

export default HomeScreen;
