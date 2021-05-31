import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import AppButton from './app/components/AppButton';
import colors from './app/constants/colors';
import AppTitle from './app/components/AppTitle';
import AppText from './app/components/AppText';
import Screen from './app/components/Screen';

export default function App() {
    let [fontsLoaded] = useFonts({
        'PlusJakartaSans-Bold': require('./app/assets/fonts/PlusJakartaSans-Bold.ttf'),
        'PlusJakartaSans-Light': require('./app/assets/fonts/PlusJakartaSans-Light.ttf'),
        'PlusJakartaSans-Medium': require('./app/assets/fonts/PlusJakartaSans-Medium.ttf'),
        'PlusJakartaSans-Regular': require('./app/assets/fonts/PlusJakartaSans-Regular.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <View style={{ marginBottom: 30 }}>
                    <AppTitle>Welcome To Muniversiti UpSkill</AppTitle>
                    <Text>Tanuj Namdeo</Text>
                </View>
                <AppButton
                    title="Google"
                    bgColor={colors.white}
                    fontColor={colors.black}
                    iconColor={colors.black}
                    icon="google"
                />
                <AppButton
                    title="Facebook"
                    bgColor={'#1877f2'}
                    icon="facebook-square"
                />
                <AppButton title="Log In" bgColor={colors.primary} />
                <View style={{ marginVertical: 80 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        // alignItems: "center",
        justifyContent: 'flex-end',
        width: '100%',
        padding: 20
    },
    emptyContainer: {
        flex: 1,
        backgroundColor: colors.primary
    },
    textContainer: {
        borderTopLeftRadius: 50,
        backgroundColor: colors.white,
        padding: 20,
        justifyContent: 'space-between',
        flex: 1,
        width: '100%'
    }
});
