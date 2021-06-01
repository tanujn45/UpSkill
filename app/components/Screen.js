import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import colors from '../constants/colors';

function Screen(props) {
    return (
        <SafeAreaView style={[styles.container, { ...props.style }]}>
            {props.children}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
});

export default Screen;
