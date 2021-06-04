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
import AppText2 from '../components/AppText2'
import AppTitle from '../components/AppTitle';
import AppButton from '../components/AppButton';
import AppHeading2 from '../components/AppHeading2';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

    const [content, setContent] = useState([
        {
            videoTitle: 'Intro to web dev',
            thumbnail: 'https://images.theconversation.com/files/350609/original/file-20200731-14-yfu9hp.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
            videoLength: '9:50',
            key: '1'
        },
        {
            videoTitle: 'Intro to how to approach web dev',
            thumbnail: 'https://images.theconversation.com/files/350609/original/file-20200731-14-yfu9hp.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
            videoLength: '9:50',
            key: '2'
        },
        {
            videoTitle: 'How to understand any intro',
            thumbnail: 'https://images.theconversation.com/files/350609/original/file-20200731-14-yfu9hp.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
            videoLength: '9:50',
            key: '3'
        },
    ]);

    const Lessons = (props) => (
        <ScrollView style={{ backgroundColor: colors.black }}>
            <View style={styles.courseBodyBox}>
                <View style={styles.videoBlock}>
                    <View style={styles.videoSection}>
                        <View style={styles.videoThumbnail}>
                            <Image style={styles.thumbnailImg} source={{uri:'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'}} />
                            <View style={{backgroundColor: '#686868', opacity: (0.8), borderTopLeftRadius: 6, borderBottomRightRadius:6}}>
                                <AppText style={{fontSize: 12}} fontColor={colors.white}>09:50</AppText>
                            </View>
                        </View>
                        <View style={styles.videoInfo}>
                        <AppText2 style={{fontSize: 15}} fontColor={colors.white}>Intro to web dev</AppText2>
                        <AppText2 style={{fontSize: 12}} fontColor='#a1a1a1'>Lesson 1</AppText2>
                        </View>
                    </View>
                    <View style={styles.aboutVideo}>
                        <AppText style={{fontSize: 13}} fontColor={colors.white}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</AppText>
                    </View>
                    <View style={styles.listAndDownloadSection}>
                        <TouchableOpacity style={styles.myList}>
                        <Ionicons style={{marginTop:2}} name="md-add-outline" size={24} color="white" />
                            <AppText style={{fontFamily: 'PlusJakartaSans-Medium', fontSize: 13}} fontColor={colors.white}>My List</AppText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.myList}>
                        <Ionicons style={{marginTop:3, marginRight:6}} name="md-cloud-download-outline" size={24} color="white" />
                            <AppText style={{fontFamily: 'PlusJakartaSans-Medium', fontSize: 13}} fontColor={colors.white}>Download</AppText>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.videoBlock}>
                    <View style={styles.videoSection}>
                        <View style={styles.videoThumbnail}>
                            <Image style={styles.thumbnailImg} source={{uri:'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'}} />
                            <View style={{backgroundColor: '#686868', opacity: (0.8), borderTopLeftRadius: 6, borderBottomRightRadius:6}}>
                                <AppText style={{fontSize: 12}} fontColor={colors.white}>09:50</AppText>
                            </View>
                        </View>
                        <View style={styles.videoInfo}>
                        <AppText2 style={{fontSize: 15}} fontColor={colors.white}>Intro to web dev</AppText2>
                        <AppText2 style={{fontSize: 12}} fontColor='#a1a1a1'>Lesson 1</AppText2>
                        </View>
                    </View>
                    <View style={styles.aboutVideo}>
                        <AppText style={{fontSize: 13}} fontColor={colors.white}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</AppText>
                    </View>
                    <View style={styles.listAndDownloadSection}>
                        <TouchableOpacity style={styles.myList}>
                        <Ionicons style={{marginTop:2}} name="md-add-outline" size={24} color="white" />
                            <AppText style={{fontFamily: 'PlusJakartaSans-Medium', fontSize: 13}} fontColor={colors.white}>My List</AppText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.myList}>
                        <Ionicons style={{marginTop:3, marginRight:6}} name="md-cloud-download-outline" size={24} color="white" />
                            <AppText style={{fontFamily: 'PlusJakartaSans-Medium', fontSize: 13}} fontColor={colors.white}>Download</AppText>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.videoBlock}>
                    <View style={styles.videoSection}>
                        <View style={styles.videoThumbnail}>
                            <Image style={styles.thumbnailImg} source={{uri:'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'}} />
                            <View style={{backgroundColor: '#686868', opacity: (0.8), borderTopLeftRadius: 6, borderBottomRightRadius:6}}>
                                <AppText style={{fontSize: 12}} fontColor={colors.white}>09:50</AppText>
                            </View>
                        </View>
                        <View style={styles.videoInfo}>
                        <AppText2 style={{fontSize: 15}} fontColor={colors.white}>Intro to web dev</AppText2>
                        <AppText2 style={{fontSize: 12}} fontColor='#a1a1a1'>Lesson 1</AppText2>
                        </View>
                    </View>
                    <View style={styles.aboutVideo}>
                        <AppText style={{fontSize: 13}} fontColor={colors.white}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</AppText>
                    </View>
                    <View style={styles.listAndDownloadSection}>
                        <TouchableOpacity style={styles.myList}>
                        <Ionicons style={{marginTop:2}} name="md-add-outline" size={24} color="white" />
                            <AppText style={{fontFamily: 'PlusJakartaSans-Medium', fontSize: 13}} fontColor={colors.white}>My List</AppText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.myList}>
                        <Ionicons style={{marginTop:3, marginRight:6}} name="md-cloud-download-outline" size={24} color="white" />
                            <AppText style={{fontFamily: 'PlusJakartaSans-Medium', fontSize: 13}} fontColor={colors.white}>Download</AppText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );

    
    const Overview = (props) => (
        <ScrollView style={{ backgroundColor: colors.black }}>
            <View style={styles.courseBodyBox}>
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
                        marginTop: 22,
                        marginBottom: 10
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
                    You'll Get Access To
                </AppHeading2>
                <View style={styles.accessContainer}>
                    <View style={styles.accessTo}>
                        <Entypo style={{marginTop:4,marginRight:15}} name="folder-video" size={20} color="white" />
                        <AppText>12 Video Lessons</AppText>
                    </View>
                    <View style={styles.accessTo}>
                    <MaterialCommunityIcons style={{marginTop:4,marginRight:15}} name="certificate-outline" size={23} color="white" />
                        <AppText>Certificate Of Completion</AppText>
                    </View>
                </View>
                <View style={styles.studentsEnrolled}>
                    <AppText style={{fontSize:12}} fontColor={colors.primary}>100 Students Enrolled</AppText>
                </View>
                <AppHeading2 style={{fontSize:16}}  fontColor={'#8b8b8b'}>MUN TRAINING</AppHeading2>
                <AppHeading2 style={{marginBottom:10}}>₹ 999/-</AppHeading2>
                <AppButton title="BUY NOW" bgColor={colors.primary} />
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
                <Tab.Screen name="Lessons" component={Lessons} />
                <Tab.Screen name="Overview" component={Overview} />
            </Tab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    studentsEnrolled:{
        borderWidth:1,
        borderColor:colors.primary,
        borderRadius:50,
        alignSelf:'baseline',
        padding:10,
        marginBottom:20,
    },
    accessContainer:{
        width:'96%',
        marginTop:10,
        backgroundColor:'#292929',
        padding:12,
        borderRadius:6,
        marginBottom:22
    },
    accessTo:{
        flexDirection:'row',
        marginBottom:5,
    },
    videoBlock:{
        width:'96%',
        backgroundColor: '#292929',
        borderRadius: 10,
        paddingTop:5,
        marginBottom:25,
    },
    videoInfo:{
        width: 160,
        marginLeft:16
    },
    thumbnailImg:{
        width: '100%',
        height: '100%',
        //  flex: 1,
        position: 'absolute',
         resizeMode: 'cover',
        borderRadius: 6
    },
    videoSection:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        margin: 14
    },
    videoThumbnail:{
        width:140,
        height:80,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    aboutVideo:{
        paddingRight:14,
        paddingLeft:14,
        marginBottom:20,
    },
    listAndDownloadSection:{
        padding:12,
        flexDirection:'row',
        justifyContent:'space-around',
        borderTopWidth:.8,
        borderTopColor: '#929292'
    },
    myList:{
        flexDirection:'row'
    },
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
        padding: 20,
        marginTop:10,
        // alignItems: 'center'
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
        width: 245,
        height: 245,
        marginRight: 20,
        backgroundColor: colors.grey
    },
    categoryImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 10
    },
    topContainer: {
        flexDirection:'row',
        color: colors.white
    },
});

export default CourseInfo;
