import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../Screens/Login";
import { SignUp } from "../Screens/SignUp";
import { Home } from "../Screens/Home";
import { MyStackParamList } from "../@Types/types";


const Stack = createNativeStackNavigator<MyStackParamList>();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{
        headerShown: false
      }} />
       <Stack.Screen name="SignUp" component={SignUp} options={{
        headerShown: false
      }} />
       <Stack.Screen name="Home" component={Home} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  );
}
