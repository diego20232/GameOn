import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Button, Icon, TextInput } from "react-native-paper";





export default props => {

    return (
        <View style={{
            backgroundColor: '#363636',
            flex: 1
        }}>
            <Image source={require('../assents/fonts/gif.gif')} resizeMode="center" style={{
                marginLeft: -55,
                marginTop: -140,
                flexDirection: 'row'
            }} />
            <View style={{ marginTop: -50, }}>
                <Text style={{
                    fontSize: 30,
                    marginLeft: 25,
                    fontWeight: 'bold',
                    marginTop: -90,
                    flexDirection: 'row',
                    color: 'white',
                    fontFamily: 'Arial'

                }}>Login</Text>

                <TextInput placeholder="Email ID" style={{
                    padding: 5,
                    backgroundColor: '	#DCDCDC',
                    margin: 15,


                }} keyboardType="email-address" placeholderTextColor="white" left={<TextInput.Icon icon="email-fast" />} />

                <TextInput placeholder="password" style={{
                    padding: 5,
                    backgroundColor: '	#DCDCDC',
                    margin: 15,
                    marginTop: 9,

                }} keyboardType="visible-password" placeholderTextColor="white" left={<TextInput.Icon icon="eye-off" />} />

                <Button style={{
                    borderRadius: 10,
                    backgroundColor: '#66CDAA',
                    margin: 50,
                    padding: 7,
                    marginTop: 10,
                    position: 'relative'

                }} textColor="white" onPress={() => props.navigation.navigate('home')}>Login</Button>
                <Button style={{
                    marginLeft: 290,
                    marginTop: -176,

                }} textColor="#66CDAA">Forgot?</Button>

                <Text style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginTop: 120,
                    color: '#696969',
                    opacity: 2
                }}>Or, login with...</Text>

                <Button icon={require ('../assents/fonts/gogo.png')} style={{
                    marginLeft: 20,
                    marginTop: 25,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    padding: 4,
                    margin: 280,
                    display: 'flex',
                    
                    marginBottom: 'auto',
                    
                }} textColor="#2F4F4F" mode="contained" ></Button>

               <View>
                <Pressable>
                    <Image source={require ('../assents/fonts/face.png')} style={{
                        backgroundColor: 'white',
                        borderRadius: 10,
                        padding: 25,
                        margin: 40,
                        width: 2,
                        height: 0,
                        marginTop: -50,
                        marginLeft: 150,
                        alignItems: 'center',
                        resizeMode: 'contain',
                        paddingHorizontal: 50
                    }} />
                </Pressable>

                <Pressable>
                    <Image source={require ('../assents/fonts/tt.gif')} style={{
                        backgroundColor: 'white',
                        borderRadius: 10,
                        padding: 25,
                        margin: 40,
                        width: 2,
                        height: 0,
                        marginTop: -90,
                        marginLeft: 280,
                        alignItems: 'center',
                        resizeMode: 'contain',
                        paddingHorizontal: 50
                    }} />
                </Pressable>
                 <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: '#A9A9A9'}}>Novo no APP? <Text style={{color: '#66CDAA'}} onPress={() => props.navigation.navigate('registro')}>Registrasse!</Text></Text>
                </View>
               </View>

            </View>

        </View>
    )
}