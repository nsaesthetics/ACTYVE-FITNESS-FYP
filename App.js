import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./Stack_Drawer/Stack";
import Menu from "./Screens/Menu";

const App = () =>{
  return(
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
}
export default App;