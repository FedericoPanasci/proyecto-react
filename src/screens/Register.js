import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { signUp } from '../app/services/api'

const Register = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


  return (
    <>
    <View>
        <TextInput style={styles.input} onChangeText={(text) => setEmail(text)} placeholder={'escriba su cuenta'} />
        <TextInput style={styles.input} onChangeText={(text) => setPassword(text)} placeholder={'escriba su contraseña'}/>
        <TouchableOpacity style={styles.boton} onPress={async () => {
                await signUp(email, password)
                navigation.navigate('Login');
                }
            }>
            <Text style={styles.text}>
                Registrar
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={async() =>{
                navigation.navigate('Login');
                }
            }>
            <Text style={styles.text}>
                ir a login
            </Text>
        </TouchableOpacity>
    </View>
    </>
  )
}

export default Register

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