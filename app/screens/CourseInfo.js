import React from 'react'
import { StyleSheet, Image, View, ScrollView } from 'react-native'
import Screen from '../components/Screen';
import colors from '../constants/colors';
import AppHeading from '../components/AppHeading';
import AppText2 from '../components/AppText2'

const CourseInfo = () => {
    return (
        <Screen bgColor={colors.white}>
            <View style={styles.conHead}>
                <View style={styles.courseInfoTextBlock}>
                    <AppHeading fontColor={colors.black} style={styles.courseTitle}>MUN TRAINING</AppHeading>
                    <AppText2 fontColor={colors.black} style={styles.courseBio}>Teaches you how to swim without getting you into water.</AppText2>
                </View>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    conHead:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    courseInfoTextBlock: {
        width: '60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    courseTitle: {
        textAlign: 'center'
    },
    courseBio: {
        textAlign: 'center',
        width: '65%',
        fontSize: 12
    }
})

export default CourseInfo
