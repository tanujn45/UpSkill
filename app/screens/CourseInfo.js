import React from 'react'
import { StyleSheet, Image, View, ScrollView } from 'react-native'
import { View } from 'react-native'
const CourseInfo = () => {
    return (
        <Screen bgColor={colors.black}>
            <View style={styles.courseInfoTextBlock}>
                <AppHeading fontColor={colors.white}>MUN TRAINING</AppHeading>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    courseInfoTextBlock: {
        width: '60%',
    }
})

export default CourseInfo
