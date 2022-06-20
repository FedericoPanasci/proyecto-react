import React from 'react';
import Home from '../stacks/index';
import Cart from '../screens/Cart';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}
            options={{
                title: 'shop',
                headerShown: false,
                tabBarShowLabel:false,
                tabBarStyle: styles.tabBar,
                tabBarIcon: () => 
                <View>
                    <Ionicons name="home" size={30} color="#rgb(21, 134, 158)"/>
                    <Text style={styles.title}>Home</Text>
                </View>
            }}
        />
        <Tab.Screen name='Cart' component={Cart}
            options={{
                title: 'cart',
                headerShown: false,
                tabBarShowLabel:false,
                tabBarStyle: styles.tabBar,
                tabBarIcon: () => 
                <View>
                    <Ionicons name="cart" size={30} color="#rgb(21, 134, 158)"/>
                    <Text style={styles.title}>Cart</Text>
                </View>
            }}
        />      
    </Tab.Navigator>
);

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor:"#rgb(80, 28, 17)",
        shadowColor: "#rgb(80, 28, 17)",
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 10},
        elevation:5,
        position:'absolute',
        bottom:25,
        left:20,
        right:20,
        borderRadius:15,
        height:90
    }, title: {
        color: 'rgb(21, 134, 158)',
        textAlign: 'center',
        paddingTop: 5
    }
})