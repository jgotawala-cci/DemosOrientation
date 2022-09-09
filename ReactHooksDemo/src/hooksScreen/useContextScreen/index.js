import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {UserContext} from '../../../App';
import {Normal_Margin} from '../../AppConst/appConst';
import {TRANSLATETEXT} from '../../AppTestFiles/en';

const UseContextScreen = () => {
  const user = useContext(UserContext);

  return (
    <View style={styles.containerStyle}>
      <Text>
        {TRANSLATETEXT.Welcome}
        {user}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  buttonStyle: {marginTop: Normal_Margin},
});

export default UseContextScreen;
