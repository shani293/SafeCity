import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function Navigation() {

    return (

        <Stack.Navigator initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}>

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />

        </Stack.Navigator>
    );
}