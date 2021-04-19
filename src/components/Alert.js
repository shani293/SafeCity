import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Statusbar from '../components/Statusbar'

const Alert = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
            <Statusbar />
            <Text>In Progress!</Text>
        </View>
    );
}

export default Alert;