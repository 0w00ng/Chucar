// img
import Menubar from '../../img/menubar.png';
import UserIcon from '../../img/user_icon.png';
import Titlelogo from '../../img/chucar_logo.png';
import rightA from '../../img/right.png'
//
import * as HeaderBars from '../headbar';
import s from '../style'
//
import * as React from 'react';
import { Button, View, Text,TouchableOpacity,Image } from 'react-native';

export default function MyPageScreen({navigation }) {
    const userid = 1//route.params.userid ? route.params.userid : 'null';
    const username = 2//route.params.username ? route.params.username : 'null';

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
        onPress={() => navigation.navigate('MyPage')}>
            <Image source={UserIcon} style={s.headericon}/>
        </TouchableOpacity>
      ),
      // headerLeft: () => (
      //   <TouchableOpacity 
      //   onPress={() => navigation.toggleDrawer()}>
      //       <Image source={Menubar} style={s.headericon}/>
      //   </TouchableOpacity>
      // ),
      headerTitle:"CHUCAR"
    })   

    return (
      <View>
        <View style={{
          backgroundColor:'white',width:'100%',height:150,justifyContent:'center',
          borderColor:'white',
          borderBottomColor:'#a0a0a0',
          borderRightColor:'#d0d0d0',
          borderWidth:3
          }}>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center',margin:50}}>
            <Text style={s.label}>김영웅 고객님</Text>
            <Image style={{width:30,height:30}} source={rightA} />
          </TouchableOpacity>
        </View>
        <View style={{
          width:'100%',height:70,justifyContent:'center',
          borderColor:'#f0f0f0',
          borderBottomColor:'#a0a0a0',
          borderWidth:3
        }}>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
          onPress={() => navigation.navigate('EstlistPage')}
          >
            <Text style={s.label}>내 견적내역</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          width:'100%',height:70,justifyContent:'center',
          borderColor:'#f0f0f0',
          borderBottomColor:'#a0a0a0',
          borderWidth:3
        }}>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
          onPress={() => navigation.navigate('LoginPage')}
          >
            <Text style={{margin:10, color:'#a0a0a0', fontSize:15}}>로그인</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          width:'100%',height:70,justifyContent:'center',
          borderColor:'#f0f0f0',
          borderBottomColor:'#a0a0a0',
          borderWidth:3
        }}>
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
          onPress={() => navigation.navigate('EstlistPage')}
          >
            <Text style={{margin:10, color:'#a0a0a0', fontSize:15}}>로그아웃</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

    
  }