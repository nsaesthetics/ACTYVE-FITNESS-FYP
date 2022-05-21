import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import React, { Component } from 'react';
DrawerContentScrollView
import { StyleSheet,View, Image, Text,TouchableOpacity,ScrollView ,FlatList, ImageBackground} from 'react-native';
const DrawerContents = (props, {navigation})=>{
          
        return (
            <View style={{flex:1}} >
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#272a45'}}>
                <ImageBackground source={require('./Icons_Images/drawerbg.png')} style={{padding:20}} >
                <Image style={styles.Image} source={require('./Icons_Images/naveedpic.jpg')} />
                <Text style={{fontSize:20, color:'#ffffff', fontFamily:'nottoserif',}}>Naveed.S</Text>
                </ImageBackground>
                <View style={{flex:1, backgroundColor:'#ffffff',}}>
                <DrawerItemList {...props}/>
                </View>
            </DrawerContentScrollView> 
            <View style={{padding:20, borderTopWidth:1, borderTopColor:'#ccc'}}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
                <Text style={{fontSize:15,color:'#000000', fontFamily:'sans-serif', marginLeft:5, fontWeight:'900'}}>
                    Sign Out
                </Text>
                </TouchableOpacity>
            </View>
            </View>
        );
    }
export default DrawerContents;

const styles=StyleSheet.create({
    Image:{
    marginLeft:'3%',
    height:80,borderRadius:34,
    marginTop:30,     
    width:80,
    }
});