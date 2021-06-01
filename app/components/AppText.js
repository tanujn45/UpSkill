import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../constants/colors';

const AppText = (props) => {
    return (
        <Text style={[styles.text, { ...props.style }]}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontFamily: 'PlusJakartaSans-Bold',
        color: colors.black
    }
});

export default AppText;
