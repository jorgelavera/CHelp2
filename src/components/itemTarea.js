import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { COLORS } from '../constants';

function itemTarea({ item }) {
    return (
        <View style={styles.listItem}>
            <TouchableOpacity style={styles.button}>
                <Image source={item.imagen} style={styles.imagen} />
                <Text>{item.titulo}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default itemTarea;

const styles = StyleSheet.create({
    listItem: {
        margin: 16,
        paddingTop: 16,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        width: "80%",
        height: 120,
        flex: 1,
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: COLORS.principal,
    },
    button: {
        height: 80,
        width: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    imagen: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    }
});