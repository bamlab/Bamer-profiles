import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home/Home';
import { Profile } from '../screens/Profile';

const { Screen, Navigator } = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};
