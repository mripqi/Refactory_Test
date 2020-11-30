import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Sort from './sort';
import Reverse from './reverse_undo_redo';
import Home from './home';

const Stack = createStackNavigator();

export default function index() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sort" component={Sort} />
        <Stack.Screen name="Reverse" component={Reverse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
