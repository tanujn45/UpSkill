import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import CourseInfo from '../screens/CourseInfo';

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={Home}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="CourseInfo"
                component={CourseInfo}
            />
        </Stack.Navigator>
    );
};

export default AppNavigation;
