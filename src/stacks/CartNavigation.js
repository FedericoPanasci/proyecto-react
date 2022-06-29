import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../constants/colors';
import Cart from '../screens/Cart';

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
        <Stack.Screen name="Cart" component={Cart} />
        
    </Stack.Navigator>
);