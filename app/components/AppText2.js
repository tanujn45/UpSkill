import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const AppText2 = ({ fontColor = colors.primary, children }) => {
    return <Text style={[styles.text, { color: fontColor }]}>{children}</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: 'PlusJakartaSans-Bold'
    }
});

export default AppText2;
