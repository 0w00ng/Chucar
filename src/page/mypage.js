import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function MyPageScreen({navigation }) {
    const userid = 1//route.params.userid ? route.params.userid : 'null';
    const username = 2//route.params.username ? route.params.username : 'null';
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>내정보</Text>
        <Text>userId: {JSON.stringify(userid)}</Text>
        <Text>userName: {JSON.stringify(username)}</Text>
        <Button
          title="로그인"
          onPress={() => navigation.navigate('로그인')}
        />
      </View>
    );
  }