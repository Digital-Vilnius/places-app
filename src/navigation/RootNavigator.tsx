import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { drawerNavigator, placeRoute } from './types';
import { Place } from '@features/places/types';
import DrawerNavigator from './DrawerNavigator';
import { PlaceScreen } from '@features/places/screens';

export type RootStackParamList = {
  [placeRoute]: { place: Place };
  [drawerNavigator]: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: false,
};

const RootNavigator: FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={screenOptions}>
        <RootStack.Screen name={drawerNavigator} component={DrawerNavigator} />
        <RootStack.Screen name={placeRoute} component={PlaceScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
