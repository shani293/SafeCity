import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../components/HomeScreen';
import News from '../components/News';
import Alert from '../components/Alert';
import Profile from '../components/Profile'
import Statusbar from '../components/Statusbar'

const styles = StyleSheet.create({
    header: {
        height: 55,
        backgroundColor: '#00BCBD',
        paddingLeft: '5%',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    imageStyle: {
        height: 140,
        width: 140,
        borderRadius: 140 / 2,
        alignSelf: 'center',
        marginVertical: 20
    }
})
const Tab = createBottomTabNavigator();

export default function Home() {
    return (
        <>
        <Tab.Navigator tabBarOptions={{
            showLabel: true,
            activeBackgroundColor: "white",
            inactiveBackgroundColor: 'white',
            activeTintColor: '#0076FF',
            keyboardHidesTabBar: true
        }}
        >
            <Tab.Screen options={{
                tabBarIcon: ({color}) => (
                    <Icon name="home" color={color} size={25} />
                )
            }} name="Home" component={HomeScreen} />
            <Tab.Screen options={{
                tabBarIcon: ({color}) => (
                    <Icon1 name="newspaper" color={color} size={25} />
                )
            }} name="News" component={News} />

            <Tab.Screen options={{
                tabBarIcon: ({color}) => (
                    <Icon1 name="bell-plus" color={color} size={25} />
                )
            }} name="Alert" component={Alert} />

            <Tab.Screen options={{
                tabBarIcon: ({color}) => (
                    <Icon2 name="md-person-circle-outline" color={color} size={25} />
                )
            }} name="Profile" component={Profile} />
        </Tab.Navigator>
        </>
    );
}
