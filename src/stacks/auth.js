import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../constants/colors';
import Register from '../screens/Register';
import Access from '../screens/Access';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
            headerStyle:{
                backgroundColor: COLORS.primary
            },
            headerTintColor: COLORS.secondary,
            headerTitleStyle: {
                fontWeight: 'bold'
            }
    }}
    >
        <Stack.Screen name="Register" component={Register} /> 
        <Stack.Screen name="Login" component={Access} />        

    </Stack.Navigator>
);