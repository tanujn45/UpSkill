import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const AppHeading = ({ fontColor = colors.white, style, children }) => {
    return (
        <Text style={[styles.text, { ...style }, { color: fontColor }]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        fontFamily: 'PlusJakartaSans-Bold'
    }
});

export default AppHeading;
