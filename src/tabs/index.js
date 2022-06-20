import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../stacks/index';
import Cart from '../screens/Cart';

const Tab = createStackNavigator();

export default () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}
            options={{
                title: 'shop',
                tabBarIcon: () => <image source={img} />
            }}
        />
        <Tab.Screen 
        name='Cart' component={Cart}
        />      
    </Tab.Navigator>
);