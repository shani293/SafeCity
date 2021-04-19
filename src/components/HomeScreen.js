import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Statusbar from '../components/Statusbar'
import Icon from 'react-native-vector-icons/MaterialIcons';

const data = [
    {
        id: '1',
        title: "Car Theif",
        image: require("../assets/carthief.jpg")
    },
    {
        id: '2',
        title: "Robery",
        image: require("../assets/robery.png")
    },
    {
        id: '3',
        title: "Public offence",
        image: require("../assets/publicOffence.jpg")
    },
    {
        id: '4',
        title: "Drugs Offence",
        image: require("../assets/drugs.jpg")
    },
]

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            {/* //////////////////////////////Header Start/////////////////////////// */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name="keyboard-arrow-left" color={'white'} size={40} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Home</Text>
                <TouchableOpacity>
                    <Icon name="location-pin" color={'white'} size={32} />
                </TouchableOpacity>
            </View>
            {/* //////////////////////////////Header End/////////////////////////// */}

            {/* //////////////////////////////List of Crimes/////////////////////////// */}
            <FlatList
                data={data}
                renderItem={({ item, index }) =>

                    <View>

                        <TouchableOpacity>
                            <View style={styles.listView}>
                                <Image source={item.image}
                                    style={styles.imageStyle}
                                />
                                <Text style={styles.textStyle}>
                                    {item.title}
                                </Text>

                            </View>
                        </TouchableOpacity>
                        <View style={styles.separator} />
                    </View>
                }

                keyExtractor={item => item.id}

            />

        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    header: {
        height: 70,
        backgroundColor: '#687089',
        paddingHorizontal: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    listView: {
        height: 100,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: '5%',
    },
    imageStyle: {
        height: 80,
        width: 80,
    },
    textStyle: {
        color: 'black',
        fontSize: 16,
        marginLeft: '3%',
        fontWeight: 'bold'
    },
    separator: {
        height: 2,
        backgroundColor: '#F0F2F9'
    }
})