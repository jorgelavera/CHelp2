import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from '../screens/MainScreen';
import ListaTipos from '../screens/TiposScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={MainScreen} />
                <Stack.Screen name="Tipos" component={ListaTipos} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;