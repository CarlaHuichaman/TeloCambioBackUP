import React, { useState } from 'react'
import { Text, StyleSheet, View, Image, TextInput } from 'react-native'

export default function Login() {
    return (
        <View style={styles.padre}>
            <View>
                <Image source={require('../assets/yo.png')} style={styles.profile} />
            </View>
            <View style={styles.tarjeta}>
                <View style={styles.cajaTexto}>
                    <TextInput placeholder='Ingrese Correo Electronico'style={{paddingHorizontal:15}} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    padre:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    profile:{
        width:100,
        height:100,
        borderRadius:50,
        borderColor:'white'
    },
    tarjeta:{
        margin:20,
        backgroundColor:'white',
        borderRadius:20,
        width:'90%',
        padding:20,
        shadowColor:'#000',
        shadowOffset:{
            with:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,

    }
})