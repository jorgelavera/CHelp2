import { COLORS } from '../constants';
import { useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import { useSelector, connect } from 'react-redux';

const ListaTareasScreen = ({ navigation }) => {
    const tareasFiltradas = useSelector((state) => state.tareas.filteredTarea);

    useEffect(() => {
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={tareasFiltradas}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                console.log('---')
                                console.log(item.id)
                                navigation.navigate("Edit");
                            }}
                        >
                            <Image style={styles.imagen} source={item.imagen} />
                            <Text style={styles.text}>{item.titulo}</Text>
                        </TouchableOpacity>
                    </View>
                )}
                horizontal={false}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    console.log('---')
                    navigation.navigate("Nuevo");
                }}
            >
                <Text style={styles.text}>Nueva Tarea</Text>
            </TouchableOpacity>
        </View>
    );
}

export default connect()(ListaTareasScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.claro,
        width: '100%',
        justifyContent: "flex-start"
    },
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
        justifyContent: "center"
    },
    button: {
        height: 80,
        width: 200,
        paddingLeft: 16,
        flexDirection: "row",
        alignItems: "center",
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

