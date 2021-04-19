import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Statusbar from '../components/Statusbar'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Switch } from 'react-native-paper';

const Profile = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    return (
        <View style={{ flex: 1, backgroundColor: '#EFF1F8' }}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name="keyboard-arrow-left" color={'white'} size={40} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Settings</Text>
            </View>
            <ScrollView>
                <Text style={{ fontSize: 14, marginLeft: '5%', marginVertical: 15, color: '#B1B5C4' }}>GENERAL</Text>
                <View style={styles.itemStyle}>
                    <Text style={styles.itemText}>Permission</Text>
                    <Switch
                        trackColor={{ false: "#C6CBDC", true: "#68708A" }}
                        thumbColor={isEnabled ? "white" : "white"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={styles.itemStyle}>
                    <Text style={styles.itemText}>Push Notifications</Text>
                    <Switch
                        trackColor={{ false: "#C6CBDC", true: "#68708A" }}
                        thumbColor={isEnabled1 ? "white" : "white"}
                        onValueChange={toggleSwitch1}
                        value={isEnabled1}
                    />
                </View>
                <Text style={{ fontSize: 14, marginLeft: '5%', marginVertical: 15, color: '#B1B5C4' }}>SUPPORTIVE</Text>
                <TouchableOpacity style={styles.itemStyle}>
                    <Text style={styles.itemText}>Help</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemStyle}>
                    <Text style={styles.itemText}>About Application</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemStyle}>
                    <Text style={styles.itemText}>Send Feedback</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemStyle}>
                    <Text style={styles.itemText}>Support</Text>
                </TouchableOpacity>
                <View style={styles.itemStyle}>
                    <Text style={styles.itemText}>App Version</Text>
                    <Text style={{ color: '#A4A4A4' }}>V 2.1</Text>
                </View>
                <TouchableOpacity style={styles.signOut}>
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: '#687089',
        paddingHorizontal: '2%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 16,
        color: 'white',
        marginLeft: '20%'
    },
    itemStyle: {
        height: 50,
        marginBottom: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: '5%',
        alignItems: 'center'
    },
    itemText: {
        fontSize: 16,
        color: '#474747',
        fontWeight: 'bold'
    },
    signOut: {
        height: 50,
        borderColor: '#81889F',
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        marginVertical: 30
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#81889F'
    }
})