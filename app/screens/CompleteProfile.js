import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import colors from '../constants/colors';

import AppButton from '../components/AppButton';
import AppHeading from '../components/AppHeading';
import AppText from '../components/AppText';
import Screen from '../components/Screen';

const CompleteProfile = ({ navigation }) => {
    const [number, onChangeNumber] = React.useState(null);
    const [text, onChangeText] = React.useState(null);
    return (
        <Screen>
            <View style={styles.container}>
                <View>
                    <AppHeading style={styles.heading}>Compelete your profile</AppHeading>
                    <AppText>Name</AppText>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Eg. John Doe"
                        keyboardType="default"
                        placeholderTextColor={colors.grey}
                    />
                    <AppText>E-mail Address</AppText>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Eg. john@doe.com"
                        keyboardType="email-address"
                        placeholderTextColor={colors.grey}
                    />
                    <AppText>
                        Enter your mobile number
                </AppText>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Eg. 9876543210"
                        keyboardType="phone-pad"
                        placeholderTextColor={colors.grey}
                    />
                    <AppText>Country</AppText>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Eg. India"
                        keyboardType="default"
                        placeholderTextColor={colors.grey}
                    />
                </View>
                <AppButton bgColor={colors.primary} onPress={() => navigation.navigate('Home')} />
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        width: '100%',
        justifyContent: 'space-between',
        padding: 20
    },
    heading: {
        marginBottom: 25,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#B9B9B9',
        fontSize: 14,
        marginTop: 15,
        marginBottom: 35,
        paddingBottom: 10,
    },
});

export default CompleteProfile;
