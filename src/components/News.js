import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';
import Statusbar from '../components/Statusbar'
import Icon from 'react-native-vector-icons/MaterialIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = [
    {
        id: '1',
        title: "Wolverhamton",
        image: require("../assets/news.jpg")
    },
    {
        id: '2',
        title: "Birmingham",
        image: require("../assets/news1.jpg")
    },
    {
        id: '3',
        title: "Manchester",
        image: require("../assets/news.jpg")
    },
]

const detailData = [
    {
        id: '1',
        detail: 'The motorcycle community faces its biggest challenge ever – the motorcycle crime epidemic that is affecting the nation’s big towns'
    },
    {
        id: '2',
        detail: 'and cities and trickles down to touch nearly every biker through an almost industrial scale of criminal organisation.'
    },
    {
        id: '3',
        detail: 'The motorcycle community faces its biggest challenge ever – the motorcycle crime epidemic that is affecting the nation’s big towns'
    },
]

const News = () => {
    const [newsDetail, setNewsDetail] = useState(false)
    return (
        <View style={{ flex: 1, backgroundColor: '#EFF1F8' }}>
            {/* //////////////////////////////Header Start/////////////////////////// */}
            {!newsDetail ?
                <View>
                    <View style={styles.header}>
                        <TouchableOpacity>
                            <Icon name="keyboard-arrow-left" color={'white'} size={40} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>News</Text>
                        <TouchableOpacity>
                            <Icon name="location-pin" color={'white'} size={32} />
                        </TouchableOpacity>
                    </View>

                    <Image source={require("../assets/news.jpg")}
                        style={styles.titleImage}
                    />
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) =>

                            <View>

                                <TouchableOpacity onPress={() => setNewsDetail(true)}>
                                    <View style={styles.listView}>

                                        <Text style={styles.textStyle}>
                                            {item.title}
                                        </Text>
                                        <Image source={item.image}
                                            style={styles.imageStyle}
                                        />

                                    </View>
                                </TouchableOpacity>
                                <View style={styles.separator} />
                            </View>
                        }

                        keyExtractor={item => item.id}

                    />
                </View>
                :
                <View>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => setNewsDetail(false)}>
                            <Icon name="keyboard-arrow-left" color={'white'} size={40} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Wolverhamton</Text>
                        <TouchableOpacity>
                            <Icon name="location-pin" color={'white'} size={32} />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={detailData}
                        renderItem={({ item, index }) =>

                            <View>
                                <View style={styles.detailList}>

                                    <Text style={styles.detailText}>
                                        {item.detail}
                                    </Text>

                                </View>
                            </View>
                        }

                        keyExtractor={item => item.id}

                    />
                </View>
            }

        </View>
    );
}

export default News;

const styles = StyleSheet.create({
    header: {
        height: 70,
        backgroundColor: '#687089',
        paddingHorizontal: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleImage: {
        height: 140,
        width: (windowWidth / 100) * 85,
        alignSelf: 'center',
        marginVertical: 10
    },
    headerText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    listView: {
        height: 130,
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        marginHorizontal: '5%',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    imageStyle: {
        height: 130,
        width: 150,
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
    },
    detailList: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    detailText: {
        fontSize: 16
    }
})