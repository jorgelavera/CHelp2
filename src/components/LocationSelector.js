import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";

export default function DeviceLocation() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Se ha negado el permiso para acceder a la ubicación.');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLatitude(location.coords.latitude)
            setLongitude(location.coords.longitude);
            setLocation(location.coords);
        })();
    }, []);

    let text = 'Obteniendo ubicación...';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Latitud: {latitude}</Text>
            <Text style={styles.paragraph}>Longitud: {longitude}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'center',
    },
});
