import * as React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ placeholder, value, onChangeText }) => {
    return (
        <TextInput style={styles.input}
            placeholder={placeholder}
            placeholderTextColor = "#E2E5E6"
            value={value}
            onChangeText={onChangeText}
        />
    );
}

export default Input;

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: '90%',
        borderColor: '#0076FF',
        borderWidth: 1,
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 20,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#707070',
        fontFamily: 'OpenSans-Regular'
    }
})