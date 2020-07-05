import * as React from 'react';
import {Component} from 'react';
//import { Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from "./src/screens/HomeScreen";
import SignUpScreen from "./src/screens/SignUp";
import SelectionScreen from "./src/screens/Selection";
import SearchScreen from "./src/screens/SearchScreen";


// const instructions = Platform.select({
//   ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
//   android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
// });

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AuthorNav (){
  return (
      <Drawer.Navigator initialRouteName="Search" >
      <Drawer.Screen
        name="Search"
        component={SearchScreen}
        options={{ drawerLabel: 'Search' }}
      />
      {/* <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{ drawerLabel: 'Updates' }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'Profile' }}
      /> */}
    </Drawer.Navigator>
);
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Selection">
        <Stack.Screen name="Sign In" component={HomeScreen}/>
        <Stack.Screen name="Sign Up" component={SignUpScreen}/>
        <Stack.Screen name="Selection" component={SelectionScreen}/>
        <Stack.Screen name="Search" component={SearchScreen}/>
        <Stack.Screen name="Author" component={AuthorNav}/>
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}