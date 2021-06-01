import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const AppHeading2 = ({ fontColor = colors.black, children }) => {
    return <Text style={[styles.text, { color: fontColor }]}>{children}</Text>;
};

const styles = StyleSheet.create({
    text: {
<<<<<<< HEAD
        fontSize: 14,
        fontFamily: 'PlusJakartaSans-Bold'
=======
        fontSize: 15,
        fontFamily: 'PlusJakartaSans-Light'
>>>>>>> d1c0205a3259705b54e9e8830e130318c189d49f
    }
});

export default AppHeading2;
