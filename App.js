import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import SignIn from './app/screens/SignIn';
import HomeScreen from './app/screens/HomeScreen';
import AuthNavigation from './app/navigation/AuthNavigation';
import CompleteProfile from './app/screens/CompleteProfile';

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
            <NavigationContainer>
                <AuthNavigation />
            </NavigationContainer>
        );
    }
}
