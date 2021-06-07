import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import AuthNavigation from './app/navigation/AuthNavigation';
import OTPVerification from './app/screens/OTPVerification';
import CompleteProfile from './app/screens/CompleteProfile';
import CourseInfo from './app/screens/CourseInfo';
import AppNavigation from './app/navigation/AppNavigation';
import Profile from './app/screens/Profile';
import UpToDate from './app/screens/UpToDate';

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
                <AppNavigation />
                {/* <AuthNavigation /> */}
                {/* <AuthNavigation /> */}
                {/* <Profile /> */}
            </NavigationContainer>
        );
    }
}
