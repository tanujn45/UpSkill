import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import CompleteProfile from '../screens/CompleteProfile';

const Stack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Welcome"
                component={Welcome}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="CompleteProfile"
                component={CompleteProfile}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({});

export default AuthNavigation;
