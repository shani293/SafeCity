import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Signup from '../screens/Signup';

const Stack = createStackNavigator();

export default function Navigation() {

    return (
<NavigationContainer>
        <Stack.Navigator initialRouteName='Login'
            screenOptions={{
                headerShown: false
            }}>

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Signup" component={Signup} />

        </Stack.Navigator>
        </NavigationContainer>
    );
}