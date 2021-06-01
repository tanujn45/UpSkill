import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const AppText2 = (props) => {
    return (
        <Text style={[styles.text, { ...props.style }]}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: 'PlusJakartaSans-Bold',
        color: colors.primary
    }
});

export default AppText2;
