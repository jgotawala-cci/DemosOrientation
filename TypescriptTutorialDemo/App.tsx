import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteName} from './src/routes';
import HomeScreen from './src/homeScreen';
import VariableDemo from './src/variableDemo/variableDemo';
import FunctionDemo from './src/functionDemo/functionDemo';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RouteName.HOMESCREEN}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={RouteName.VARIABLEDEMO} component={VariableDemo} />
        <Stack.Screen name={RouteName.FUNCTIONDEMO} component={FunctionDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
