import React, { useState } from 'react';
import {
    StyleSheet,
    Image,
    View,
    ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../constants/colors';
import AppHeading from '../components/AppHeading';
import AppHeading2 from '../components/AppHeading2';
import Screen from '../components/Screen';

const Home = ({ navigation }) => {
    const [category, setCategory] = useState([
        {
            category: 'Comedy',
            img: 'https://images.theconversation.com/files/350609/original/file-20200731-14-yfu9hp.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
            key: '1'
        },
        {
            category: 'CSGO',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_d196d945c6170e9cadaf67a6dea675bd5fa7a046.1920x1080.jpg?t=1612812939',
            key: '2'
        },
        {
            category: 'Football',
            img: 'https://i.pinimg.com/originals/53/62/29/536229884dd211ed415628f406283771.jpg',
            key: '3'
        },
        {
            category: 'Leadership',
            img: 'https://www.suntiros.com/wp-content/uploads/2018/07/Katherine-Langford-Hot-Photos-Gallery-In-2018.jpg',
            key: '4'
        },
        {
            category: 'Swimming',
            img: 'https://i.pinimg.com/originals/53/62/29/536229884dd211ed415628f406283771.jpg',
            key: '5'
        }
    ]);

    return (
        <Screen bgColor={colors.black}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.categoriesContainer}>
                    <AppHeading2 fontColor={colors.white}>Categories</AppHeading2>
                    <FlatList
                        data={category}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.categoriesBlock}
                            >
                                <Image
                                    source={{ uri: item.img }}
                                    style={styles.categoryImage}
                                />
                                <LinearGradient
                                    colors={[
                                        colors.transparent,
                                        colors.transparent,
                                        colors.black
                                    ]}
                                    style={styles.gradient}
                                />
                                <View style={styles.categoryTextBlock}>
                                    <AppHeading2 fontColor={colors.white}>
                                        {item.category}
                                    </AppHeading2>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View style={styles.topCoursesContainer}>
                    <AppHeading2 fontColor={colors.white}>
                        Top Courses
                    </AppHeading2>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("CourseInfo")}
                        style={{ marginTop: 20 }}
                        activeOpacity={0.8}
                    >
                        <View style={styles.courseBlock}>
                            <Image
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80'
                                }}
                                style={styles.image}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginTop: 20 }}
                        activeOpacity={0.8}
                    >
                        <View style={styles.courseBlock}>
                            <Image
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80'
                                }}
                                style={styles.image}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Screen>
    );
};

const styles = StyleSheet.create({
    categoryTextBlock: {
        marginBottom: 7
    },
    categoriesContainer: {
        paddingRight: '5%',
        paddingLeft: '5%',
        marginTop: 20
    },
    categoriesBlock: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 8,
        width: 175,
        height: 245,
        marginRight: 40,
        backgroundColor: '#9ad6d2'
    },
    topCoursesContainer: {
        marginTop: 45,
        paddingRight: '5%',
        paddingLeft: '5%'
    },
    courseBlock: {
        width: '100%',
        height: 275,
        borderRadius: 8
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 8
    },
    categoryImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 8
    }
});

export default Home;
