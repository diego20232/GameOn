import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Icon, TextInput } from "react-native-paper";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";



export default props => {

    return (
        <View style={{ flex: 1, backgroundColor: '#363636', marginTop: -15 }}>
            <Image source={require('../imagens/girl.png')} resizeMode="center" style={{marginTop: -70}} />
 
            <View style={{marginTop: -70}}>
            <Text style={{
                color: '#66CDAA',
                marginLeft: 30,
                marginTop: -30,
                fontStyle: 'italic',
                fontSize: 25,

            }}>Registro!</Text>


            <Pressable>
                <Image source={require('../assents/fonts/gogo.png')} style={{
                    backgroundColor: '#2F4F4F',
                    borderRadius: 10,
                    padding: 25,
                    margin: 40,
                    width: 2,
                    height: 0,
                    marginTop: 30,
                    marginLeft: 25,
                    alignItems: 'center',
                    resizeMode: 'contain',
                    paddingHorizontal: 50
                }} />
            </Pressable>

            <Pressable>
                <Image source={require('../assents/fonts/faceNovo.png')} style={{
                    backgroundColor: '#2F4F4F',
                    borderRadius: 10,
                    padding: 25,
                    margin: 40,
                    width: 2,
                    height: 0,
                    marginTop: -90,
                    marginLeft: 150,
                    alignItems: 'center',
                    resizeMode: 'contain',
                    paddingHorizontal: 50
                }} />
            </Pressable>

            <Pressable>
                <Image source={require('../assents/fonts/twt.png')} style={{
                    backgroundColor: '#2F4F4F',
                    borderRadius: 10,
                    padding: 25,
                    margin: 40,
                    width: 2,
                    height: 0,
                    marginTop: -90,
                    marginLeft: 270,
                    alignItems: 'center',
                    resizeMode: 'contain',
                    paddingHorizontal: 50
                }} />
            </Pressable>

            <Text style={{
                textAlign: 'center',
                alignItems: 'center',
                color: '#A9A9A9'
            }}>ou cadastre-se com e-mail</Text>
            </View>

            <TextInput placeholder="Nome Completo" style={{
                margin: 25,
                backgroundColor: '#363636',
                
            }} textColor="white" placeholderTextColor="#C0C0C0" left={<TextInput.Icon icon="rename-box" color="white"/>}/>

<TextInput placeholder="Digite seu melhor email" style={{
                margin: 25,
                backgroundColor: '#363636',
                marginTop: -10
                
            }} textColor="white" placeholderTextColor="#C0C0C0" left={<TextInput.Icon icon="email" color="white"/>}/>

<TextInput placeholder="Crie uma senha" style={{
                margin: 25,
                backgroundColor: '#363636',
                marginTop: -10
                
            }} textColor="white" placeholderTextColor="#C0C0C0"  left={<TextInput.Icon icon="account-arrow-right" color="white"/>}/>

<TextInput placeholder="Digite a senha novamente" style={{
                margin: 25,
                backgroundColor: '#363636',
                marginTop: -10
                
            }} textColor="white" placeholderTextColor="#C0C0C0" right={<TextInput.Icon icon="eye" color="white"/>}/>

<TextInput placeholder="Data de aniversário" style={{
                margin: 25,
                backgroundColor: '#363636',
                marginTop: -10
                
            }} textColor="white" placeholderTextColor="#C0C0C0" inputMode="search" left={<TextInput.Icon icon="cake" color="white"/>}/>
        </View>
    )
}


