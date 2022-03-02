// src
import MyDrawer from './src/drawer';
import Root from './src/root';
// lib
import * as React from 'react';
import { setCustomText } from "react-native-global-props"

const customTextProps = {
  style: {
    fontFamily: "NotoSansKR-Regular",
  },
}

setCustomText(customTextProps)

export default function App() {
  return (
    <MyDrawer />
  );
}
