// src
import Root from './root';
import IntroPage from './page/introPage';
import LoginPage from './page/loginPage';

// lib
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function MyDrawer() {

const Drawer = createDrawerNavigator();
    return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Root"
        screenOptions={{
          headerShown: false,
          drawerType: 'front',  
          swipeEnabled:false,   
        }}
      >
        <Drawer.Screen name="Root" component={Root}/>

      </Drawer.Navigator>
    </NavigationContainer>
    );
  }