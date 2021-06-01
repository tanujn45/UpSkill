import React from 'react';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import SignIn from './app/screens/SignIn';
import HomeScreen from './app/screens/HomeScreen'

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
        return <HomeScreen />;
    }
}
