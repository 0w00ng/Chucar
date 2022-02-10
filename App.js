// src
import MyDrawer from './src/drawer';
// lib
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <MyDrawer />
  );
}
