import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import colors from '../constants/colors';
import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';
import AppButton from '../components/AppButton';
import AppHeading2 from '../components/AppHeading2';
import Home from './Home';

const Tab = createMaterialTopTabNavigator();

const CourseInfo = ({ navigation }) => {
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

    const Overview = (props) => (
        <ScrollView style={{ backgroundColor: colors.black }}>
            <View style={styles.courseBodyBox}>
                <AppButton title="Start Learning" bgColor={colors.primary} />
                <AppHeading2 style={{ marginBottom: 8 }}>
                    Course Description
                </AppHeading2>
                <AppText fontColor="#939393" style={{ lineHeight: 22 }}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                </AppText>
                <AppHeading2
                    style={{
                        marginTop: 20,
                        marginBottom: 8
                    }}
                >
                    Course Highlights
                </AppHeading2>
                <View style={styles.categoryContainer}>
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
                                    source={require('../assets/temp/muntraining.png')}
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
                <AppHeading2 style={{ marginBottom: 8 }}>
                    Course Description
                </AppHeading2>
                <AppText fontColor="#939393" style={{ lineHeight: 22 }}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                </AppText>
            </View>
        </ScrollView>
    );

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.gradientBg}
                source={require('../assets/temp/muntraining.png')}
            >
                <LinearGradient
                    colors={[colors.transparent, colors.black]}
                    style={styles.gradient}
                />
                <View style={styles.courseTitleBox}>
                    <AppTitle style={styles.courseTitle}>
                        Model UN Training
                    </AppTitle>
                    <AppText style={styles.courseBio}>
                        Teaches you how to swim without getting you into water.
                    </AppText>
                    <AppHeading2 fontColor={colors.white}>
                        - Tanuj Namdeo
                    </AppHeading2>
                </View>
            </ImageBackground>
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: {
                        color: colors.white,
                        fontSize: 12,
                        fontFamily: 'PlusJakartaSans-Medium',
                        textTransform: 'uppercase'
                    },
                    indicatorStyle: {
                        backgroundColor: colors.primary
                    },
                    style: { backgroundColor: colors.black }
                }}
            >
                <Tab.Screen name="Lessons" component={Home} />
                <Tab.Screen name="Overview" component={Overview} />
            </Tab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        width: '100%'
    },
    courseTitleBox: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginBottom: 0
    },
    courseTitle: {
        textAlign: 'center'
    },
    courseBio: {
        width: '80%',
        textAlign: 'center',
        marginBottom: 10
    },
    gradientBg: {
        width: '100%',
        height: 300,
        justifyContent: 'flex-end'
    },
    gradient: {
        backgroundColor: colors.transparent,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    courseBodyBox: {
        padding: 20
    },
    categoryTextBlock: {
        marginBottom: 20
    },
    categoriesContainer: {
        // paddingRight: '5%',
        // paddingLeft: '5%',
        marginTop: 20
    },
    categoriesBlock: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10,
        width: 275,
        height: 245,
        marginRight: 20,
        backgroundColor: colors.grey
    },
    categoryImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 10
    }
});

export default CourseInfo;
