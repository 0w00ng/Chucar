import * as React from 'react';
import { Button, View, Text } from 'react-native';
// src
import Root from '../root';
import MyPage from './mypage';
import LoginPage from './loginpage';
import SignupPage from './signuppage';
export default function loginPageScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>LoginPage</Text>
        <Button
          title="회원가입"
          onPress={() =>
            navigation.navigate('회원가입')
          }
        />
      </View>
    );
  }