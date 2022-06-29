import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import { COLORS } from '../constants/colors';
import Breads from '../screens/Breads';
import Details from '../screens/Details';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { logout } from '../app/services/api';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{
            headerShown:true,
            headerStyle:{
                backgroundColor: COLORS.primary
            },
            headerTintColor: COLORS.secondary,
            headerTitleStyle: {
                fontWeight: 'bold'
            }, headerRight: (props) => (
                <TouchableOpacity onPress={logout}>
                    <Text style={styles.titleHeader}>
                        Log Out
                    </Text>
                </TouchableOpacity>
            )
    }}
    >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Breads" component={Breads} />
        <Stack.Screen name="Details" component={Details} />
        
    </Stack.Navigator>
);

export const styles = StyleSheet.create({
    titleHeader: {
        color: COLORS.secondary
    }
})