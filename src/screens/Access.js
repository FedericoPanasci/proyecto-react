import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { singIn } from '../app/services/api'

const Access = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


  return (
    <>
    <View>
        <TextInput style={styles.input} onChangeText={(text) => setEmail(text)} placeholder={'escriba su cuenta'} />
        <TextInput style={styles.input} onChangeText={(text) => setPassword(text)} placeholder={'escriba su contraseña'}/>
        <TouchableOpacity style={styles.boton} onPress={async() => {
                await singIn(email, password)
                }
            }>
            <Text style={styles.text}>
                Login
            </Text>
        </TouchableOpacity>
    </View>
    </>
  )
}

export default Access

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor:'#000',
        padding: 10,
        margin: 10,
        borderRadius: 5
    }, 
    boton: {
        backgroundColor: '#000',
        padding: 10,
        margin: 10,
        borderRadius: 5
    }, 
    text: {
        color: 'white'
    }
})