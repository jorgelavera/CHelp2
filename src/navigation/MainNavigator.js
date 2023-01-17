import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from '../screens/MainScreen';
import ListaTiposScreen from '../screens/TiposScreen';
import ListaTareasScreen from '../screens/TareasScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio">
                <Stack.Screen name="Inicio" component={MainScreen} />
                <Stack.Screen name="Tipos" component={ListaTiposScreen} />
                <Stack.Screen name="Tareas" component={ListaTareasScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;