import React from 'react';
import Home from '../stacks/index';
import Cart from '../screens/Cart';
import Edit from '../screens/Edit';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import auth from '../stacks/auth';
import { logout } from '../app/services/api';
import { COLORS } from '../constants/colors';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}
            options={{
                title: 'shop',
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                headerStyle: styles.header,
                headerRight: (props) => (
                    <TouchableOpacity onPress={logout}>
                        <Text style={styles.titleHeader}>
                            Log Out
                        </Text>
                    </TouchableOpacity>
                ),
                tabBarIcon: () => 
                <View>
                    <Ionicons name="home" size={30} color="#rgb(21, 134, 158)"/>
                    <Text style={styles.title}>Home</Text>
                </View>
            }}
        />
        <Tab.Screen name='Cart' component={Cart}
            options={{
                title: 'Cart',
                headerShown: true,
                tabBarShowLabel:false,
                tabBarStyle: styles.tabBar,
                headerStyle:{
                    backgroundColor: COLORS.primary
                },
                headerTintColor: COLORS.secondary,
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerRight: (props) => (
                    <TouchableOpacity onPress={logout}>
                        <Text style={styles.titleHeader}>
                            Log Out
                        </Text>
                    </TouchableOpacity>
                ),
                tabBarIcon: () => 
                <View>
                    <Ionicons name="cart" size={30} color="#rgb(21, 134, 158)"/>
                    <Text style={styles.title}>Cart</Text>
                </View>
            }}
        />      
        <Tab.Screen name='Edit' component={Edit}
            options={{
                title: 'edit',
                headerShown: true,
                tabBarShowLabel:false,
                tabBarStyle: styles.tabBar,
                headerStyle:{
                    backgroundColor: COLORS.primary
                },
                headerTintColor: COLORS.secondary,
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerRight: (props) => (
                    <TouchableOpacity onPress={logout}>
                        <Text style={styles.titleHeader}>
                            Log Out
                        </Text>
                    </TouchableOpacity>
                ),
                tabBarIcon: () => 
                <View>
                    <AntDesign name="edit" size={30} color="#rgb(21, 134, 158)"/>
                    <Text style={styles.title}>Edit</Text>
                </View>
            }}
        />
        <Tab.Screen name='Auth' component={auth}
            options={{
                title: 'auth',
                headerShown: true,
                tabBarShowLabel:false,
                tabBarStyle: styles.tabBar,
                headerStyle:{
                    backgroundColor: COLORS.primary
                },
                headerTintColor: COLORS.secondary,
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerRight: (props) => (
                    <TouchableOpacity onPress={logout}>
                        <Text style={styles.titleHeader}>
                            Log Out
                        </Text>
                    </TouchableOpacity>
                ),
                tabBarIcon: () => 
                <View>
                    <MaterialCommunityIcons name="account" size={30} color="#rgb(21, 134, 158)"/>
                    <Text style={styles.title}>Auth</Text>
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
    }, titleHeader: {
        color: COLORS.secondary
    }
})