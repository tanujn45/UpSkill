import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Welcome"
                component={SignIn}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="SomeScreen"
                component={HomeScreen}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({});

export default AuthNavigation;
