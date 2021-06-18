import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Card from './Card';
import AppText from './AppText';
import AppText2 from './AppText2';
import colors from '../constants/colors';

const VideoCard = ({ thumbnail, duration, title, lesson, about }) => {
    return (
        <Card>
            <View style={styles.videoSection}>
                <View style={styles.videoThumbnail}>
                    <Image
                        style={styles.thumbnailImg}
                        source={{
                            uri: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
                        }}
                    />
                    <View
                        style={{
                            backgroundColor: '#686868',
                            opacity: 0.8,
                            borderTopLeftRadius: 6,
                            borderBottomRightRadius: 6
                        }}
                    >
                        <AppText fontColor={colors.white}>09:50</AppText>
                    </View>
                </View>
                <View style={styles.videoInfo}>
                    <AppText2>Intro to web dev</AppText2>
                    <AppText2>Lesson 1</AppText2>
                </View>
            </View>
            <AppText style={styles.videoDescription} fontColor={colors.grey4}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
            </AppText>
        </Card>
    );
};

const styles = StyleSheet.create({
    videoBlock: {
        width: '100%',
        backgroundColor: colors.grey,
        borderRadius: 8,
        paddingTop: 5,
        marginBottom: 25
    },
    videoInfo: {
        width: 160,
        marginLeft: 16
    },
    thumbnailImg: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'cover',
        borderRadius: 4
    },
    videoSection: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    videoThumbnail: {
        width: 120,
        height: 70,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    videoDescription: {
        marginTop: 20
    }
});

export default VideoCard;
