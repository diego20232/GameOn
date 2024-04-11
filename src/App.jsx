import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, Text } from "react-native";
import Home from "./components/Home";
import Login from "./components/Login";
import Registro from "./components/Registro";



const Stack = createNativeStackNavigator();


export default props => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="home">
                    <Stack.Screen name="home" component={Home} options={{menu: 'home', headerShown: false }}/>
                    <Stack.Screen name="login" component={Login} options={{menu: 'voltar', headerTransparent: true, headerTitle: 'voltar', headerShown: false}}/>
                    <Stack.Screen name="registro" component={Registro} options={{menu: 'voltar', headerTransparent: true, headerTitle: 'voltar', headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}
