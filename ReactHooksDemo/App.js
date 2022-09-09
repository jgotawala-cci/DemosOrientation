import React, {createContext, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RoutesName} from './src/Routes/route';
import HomeScreen from './src/HomeScreen/homeScreen';
import {
  CustomScreen,
  UseCallbackMemoScreen,
  UseContextScreen,
  UseEffectScreen,
  UseReducerScreen,
  UseRefScreen,
  UseStateScreen,
} from './src/hooksScreen';
const Stack = createNativeStackNavigator();
export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState('Jay Gotawala');
  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={RoutesName.HOMESCREEN}
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name={RoutesName.USESTATE} component={UseStateScreen} />
          <Stack.Screen
            name={RoutesName.USEEFFECT}
            component={UseEffectScreen}
          />
          <Stack.Screen
            name={RoutesName.USECONTEXT}
            component={UseContextScreen}
          />

          <Stack.Screen name={RoutesName.USEREF} component={UseRefScreen} />
          <Stack.Screen
            name={RoutesName.USEREDUCER}
            component={UseReducerScreen}
          />
          <Stack.Screen
            name={RoutesName.USECALLBACKMEMO}
            component={UseCallbackMemoScreen}
          />

          <Stack.Screen name={RoutesName.CUSTOM} component={CustomScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
