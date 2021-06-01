import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

import colors from '../constants/colors';

import AppButton from '../components/AppButton';
import AppHeading from '../components/AppHeading';
import AppText from '../components/AppText';
import Screen from '../components/Screen';

const CompleteProfile = () => {
    const [number, onChangeNumber] = React.useState(null);
    const [text, onChangeText] = React.useState(null);
    return (
        <Screen style={{ padding: 30 }}>
            <AppHeading style={{ alignSelf: 'center', marginBottom: 20 }}>
                Compelete your profile
            </AppHeading>
            <AppText style={{ marginTop: 20 }}>Name</AppText>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Full Name"
                keyboardType="default"
            />
            <AppText style={{ marginTop: 20 }}>E-mail Address</AppText>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Email Address"
                keyboardType="email-address"
            />
            <AppText style={{ marginTop: 20 }}>Username</AppText>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Username"
                keyboardType="default"
            />
            <AppText style={{ marginTop: 20 }}>
                Enter your mobile number
            </AppText>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="XXXX-XXXXXX"
                keyboardType="phone-pad"
            />
            <AppText style={{ marginTop: 20 }}>State of residence</AppText>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="XXXX-XXXXXX"
                keyboardType="default"
            />
            <View style={styles.btn}>
                <AppButton />
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: '#B9B9B9',
        fontSize: 14,
        marginTop: 15
    },
    btn: {
        position: 'relative',
        width: '100%',
        alignSelf: 'flex-end'
    }
});

export default CompleteProfile;
