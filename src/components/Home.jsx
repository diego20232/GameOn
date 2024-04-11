import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-paper";



export default props => {

    return (
        <View style={{flex: 1, backgroundColor: '#363636'}}>
            <Text style={{
                fontSize: 50,
                fontWeight: 'bold',
                textAlign: 'center',
                justifyContent: 'center',
                color: 'black',
                marginTop: 40,
                fontFamily: "Helvetica",
                color: 'white'
            }}>GAMEON</Text>

            <Image source={require ('../imagens/gamer.png')} resizeMode="stretch"  style={{
                marginTop: 20,
                marginLeft: 10,
                marginTop: 90
        
            }}/>

            <Button style={{
                padding: 5,
                backgroundColor: '#66CDAA',
                margin: 25,
                borderRadius: 10,
                marginTop: 110,
                marginLeft: 25,
                
            }} icon={require ('../assents/fonts/fim.png')} textColor="white" onPress={() => props.navigation.navigate('login')} >Let´s Begin</Button>
        </View>
    )
}