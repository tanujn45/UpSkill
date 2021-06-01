import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const AppHeading2 = ({ fontColor = colors.black, children }) => {
    return <Text style={[styles.text, { color: fontColor }]}>{children}</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontFamily: 'PlusJakartaSans-Light'
    }
});

export default AppHeading2;
