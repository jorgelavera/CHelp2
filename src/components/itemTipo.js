import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { COLORS } from '../constants';
import { useSelector, useDispatch } from "react-redux";

function itemTipo({ item }) {
    return (
        <View style={styles.listItem}>
            <TouchableOpacity style={styles.button}>
                <Image style={styles.imagen} source={item.imagen} />
                <Text style={styles.text}>{item.titulo}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default itemTipo;

const styles = StyleSheet.create({
    listItem: {
        margin: 16,
        paddingTop: 16,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        width: 280,
        height: 120,
        flex: 1,
        borderRadius: 10,
        backgroundColor: COLORS.principal,
    },
    button: {
        height: 80,
        width: 200,
        paddingLeft: 16,
        flexDirection: "row",
        alignItems: "center"
    },
    imagen: {
        paddingLeft: 16,
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },
    text: {
        paddingLeft: 16,
    },
});