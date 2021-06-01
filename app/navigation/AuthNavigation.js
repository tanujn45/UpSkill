import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/SignIn';

const Stack = createStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={SignIn} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({});

export default AuthNavigation;
