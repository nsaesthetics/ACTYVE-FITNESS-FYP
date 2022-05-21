import React from 'react';
import { TouchableOpacity,View,Text, SafeAreaView, Image, StyleSheet, } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Menu from './Screens/Menu';
import Profile from './Screens/UserProfile';
import Setting from './Screens/Settings';

import Svg,{ Path } from "react-native-svg";


const Tab = createBottomTabNavigator();
const TabBarCustomButton=({accessibilityState,children,onPress})=>{
  var isSelected = accessibilityState.selected
  if(isSelected){
      return(
          <View style={{ flex: 1, alignItems: "center" }}>
          <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
              <View style={{ flex: 1, backgroundColor: "#ffffff" }}></View>
              <Svg
                  width={70}
                  height={61}
                  viewBox="0 0 75 61"
              >
                  <Path
                      d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                      fill={"#FFFFFF"}
                  />
              </Svg>
              <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}></View>
          </View>

          <TouchableOpacity
              style={{
                  top: -22.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "#FFFFFF"
              }}
              onPress={onPress}
          >
              {children}
          </TouchableOpacity>
      </View>

      )
  }else{
      return(
          <TouchableOpacity
          style={{
              flex: 1,
              height: 60,
              backgroundColor: "#FFFFFF"
          }}
          activeOpacity={1}
          onPress={onPress}
      >
          {children}
      </TouchableOpacity>

      )
  }
}

const Tabs = () => {
    return (
      <Tab.Navigator 
      screenOptions={{headerShown:false}}
      tabBarOptions={{
          showLabel:false,
          headerShown:false,
          style:{
              borderTopWidth:0,
              backgroundColor:'#0000ffff',
              elevation:0
      
          }
      }}
             >
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarIcon: ({focused}) => (
                <Image source={require('./Icons_Images/homeicon.png')}
                resizeMode="contain"
                    style={{
                        width:25,
                        height:25,
                        tintColor:focused ? '#7AACBC': '#272A45'
                    }}/>
                ),
                tabBarButton:(props)=>(
                    <TabBarCustomButton
                    {...props}
                    />
                )
            }} />
            <Tab.Screen
          name="UserProfile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
                <Image source={require('./Icons_Images/User.png')}
                    resizeMode="contain"
                    style={{
                        width:25,
                        height:25,
                        tintColor:focused ? '#7AACBC': '#272a45'
                }}/>
                ),
                tabBarButton:(props)=>(
                    <TabBarCustomButton
                    {...props}
                    />
                )
            }} />
        <Tab.Screen
         
         name="Settings"
          component={Setting}
          options={{
            tabBarIcon: ({focused}) => (
                <Image source={require('./Icons_Images/settings.png')}
                resizeMode="contain"
                style={{
                    width:25,
                    height:25,
                    tintColor:focused ? '#7AACBC': '#272A45'
                }}/>
            ),
            tabBarButton:(props)=>(
                <TabBarCustomButton
                {...props}
                />
            )
        }} />
    
        
      </Tab.Navigator>
    );
}
export default Tabs;
