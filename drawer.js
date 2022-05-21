import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DrawerContents from "./drawerContents";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Menu from "./Screens/Menu";
import Tabs from "./bottomtab";
import Profile from "./Screens/UserProfile";
import Setting from "./Screens/Settings";
import {Image} from 'react-native'
import Posture from "./Screens/Posture";
const Drawer = createDrawerNavigator();

const drawer = ()=>{
    return(
        <Drawer.Navigator drawerContent={props=> <DrawerContents {...props}/>} 
        screenOptions={{  
          headerShown: false,
          drawerActiveTintColor:'#ffffff'
          ,
          drawerInactiveTintColor:'#333',
          drawerActiveBackgroundColor:'#272a45',
        }} >  
          <Drawer.Screen 
          name="Home" drawerPosition="left" component={Tabs} 
          options={{
            drawerIcon:({focused})=>{
              <Image source={require('./Icons_Images/homeicon.png')}
              style={{ height: 20, width: 20 }}
              />
            }
            
          }}
          />
           <Drawer.Screen 
          name="UserProfile" drawerPosition="left" component={Profile}
          />
          <Drawer.Screen 
          name="Posture" drawerPosition="left" component={Posture}
          />
         
          
          
        </Drawer.Navigator>
    );
}

export default drawer;
