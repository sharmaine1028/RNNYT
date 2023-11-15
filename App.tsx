/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/components/HomeScreen';
import Search from './src/components/Search';
import {Vibration, Alert, StatusBar} from 'react-native';
const Tab = createBottomTabNavigator();

const showBookmarkAlert = () => {
  Vibration.vibrate();
  Alert.alert(
    'Comming Soon!',
    "We're hard at work on this features, check back in the near future.",
    [{text: 'OK', onPress: () => console.log('User pressed OK')}],
  );
};
StatusBar.setBarStyle('light-content');

function App(): JSX.Element {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Search"
          component={Search}
          listeners={{
            tabPress: () => showBookmarkAlert(),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
