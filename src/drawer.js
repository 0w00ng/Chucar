// src
import Root from './root';
import MyPage from './page/myPage';

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
        <Drawer.Screen name="Root" component={Root} options={{title:"홈"}}/>
        <Drawer.Screen name="MyPage" component={MyPage} options={{title:"마이페이지"}}/>
      </Drawer.Navigator>
    </NavigationContainer>
    );
  }