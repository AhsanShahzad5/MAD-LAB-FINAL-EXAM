// // In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthenticationPage from './screens/AuthScreen';

import Login from './components/Login';
import Signup from './components/Signup';
import "../global.css";

//recoil
import {
  RecoilRoot
} from 'recoil';
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/Profile';
import Chatbot from './screens/Chatbot';

const Stack = createNativeStackNavigator();



function RootStack() {
  return (
    <Stack.Navigator>
     <Stack.Screen name="Login" component={Login} />
     <Stack.Screen name="Signup" component={Signup} />
     <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Chatbot" component={Chatbot} options={{
         headerStyle: { backgroundColor: 'black' },
        headerTintColor: 'white',
        headerTitle: 'PexelAi',
      }} />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <RootStack />
      </RecoilRoot>
    </NavigationContainer>
  );
}

