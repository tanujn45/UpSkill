import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../constants/colors';
import AppTitle from '../components/AppTitle';
import AppText from '../components/AppText';
import Screen from '../components/Screen';

const Welcome = ({ navigation }) => {
    return (
        <Screen>
            <View style={styles.container}>
                <View style={{ marginBottom: 30 }}>
                    <AppTitle fontColor={colors.white}>
                        World is the New
                    </AppTitle>
                    <AppTitle fontColor={colors.primary}>School</AppTitle>
                    <AppText
                        fontColor={colors.white}
                        style={{ color: colors.white }}
                    >
                        Sign in to view the repertoire of amazing courses
                        provided by UpSkill
                    </AppText>
                </View>
                <AppButton
                    title="Continue with Google"
                    bgColor={colors.white}
                    fontColor={colors.black}
                    icon="google"
                />
                <AppButton
                    title="Continue with Facebook"
                    bgColor={'#1877f2'}
                    icon="facebook"
                />
                <View style={styles.seperator}>
                    <View style={styles.hr} />
                    <Text style={styles.seperatorText}>Or</Text>
                    <View style={styles.hr} />
                </View>
                <AppButton
                    onPress={() => navigation.navigate('CompleteProfile')}
                    title="Create an account"
                    bgColor={colors.primary}
                />
                <AppButton
                    title="Log In"
                    bgColor={colors.white}
                    fontColor={colors.black}
                />
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        width: '100%',
        justifyContent: 'center',
        padding: 20
    },
    textContainer: {
        borderTopLeftRadius: 50,
        backgroundColor: colors.white,
        padding: 20,
        justifyContent: 'space-between',
        flex: 1,
        width: '100%'
    },
    seperator: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 30
    },
    seperatorText: {
        color: colors.white,
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase',
        paddingHorizontal: 10
    },
    hr: {
        height: 1,
        flex: 1,
        backgroundColor: colors.grey2
    }
});

export default Welcome;
