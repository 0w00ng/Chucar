// src
import MyDrawer from './src/drawer';
// lib
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import FlareLane from '@flarelane/react-native-sdk';
const Drawer = createDrawerNavigator();

export default function App() {
  // React.useEffect(() => {
  //   FlareLane.initialize('INPUT_YOUR_PROJECT_ID');
  // }, []);
  return (
    <MyDrawer />
  );
}
