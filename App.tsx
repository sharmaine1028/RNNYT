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
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const showBookmarkAlert = () => {
  Vibration.vibrate();
  Alert.alert(
    'Coming Soon!',
    "We're hard at work on this features, check back in the near future.",
    [{text: 'OK', onPress: () => console.log('User pressed OK')}],
  );
};
StatusBar.setBarStyle('light-content');

function App(): JSX.Element {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}: {color: string}) => (
              <Icon name="home" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          listeners={{
            tabPress: () => showBookmarkAlert(),
          }}
          options={{
            tabBarIcon: ({color}: {color: string}) => (
              <Icon name="search" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
