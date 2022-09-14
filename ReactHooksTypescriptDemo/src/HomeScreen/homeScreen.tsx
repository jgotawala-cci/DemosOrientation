import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Button, Divider, Text} from 'react-native-elements';
import {Scale} from '../AppConst/appConst';
import {TRANSLATETEXT} from '../AppTestFiles/en';
import {RoutesName} from '../Routes/route';

const HomeScreen = ({navigation}) => {
  const onClick = (route: string) => {
    navigation.navigate(route);
  };

  return (
    <ScrollView>
      <Text style={styles.titleStyle}>{TRANSLATETEXT.Title}</Text>
      <Divider style={styles.dividerStyle} />
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  buttonStyle: {marginTop: Scale.Normal_Margin},
  titleStyle: {
    fontSize: Scale.Title_Font,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: Scale.Extra_Padding,
  },
  dividerStyle: {marginBottom: Scale.Extra_Padding},
});

export default HomeScreen;
