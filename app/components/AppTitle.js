import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const AppTitle = (props) => {
    return (
        <Text style={[styles.text, { ...props.style }]}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 36,
        fontFamily: 'PlusJakartaSans-Bold',
        color: colors.black
    }
});

export default AppTitle;
