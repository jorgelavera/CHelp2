import { COLORS } from '../constants';
import { useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import { useSelector, connect } from 'react-redux';

const ListaTareasScreen = () => {
    const tareasFiltradas = useSelector((state) => state.tareas.filteredTarea);

    useEffect(() => {
        console.log('eeee1')
        console.log(tareasFiltradas);
        //console.log(filteredTarea(tareasFiltradas.tipoFilteringId));
        //console.log(tipoSelectingId);
        console.log('eeee2')
        //dispatch(tareas(tareas.filteredTarea))
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
                                console.log(item)
                                navigation.navigate("Tareas");
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
        </View>
    );
}

export default connect()(ListaTareasScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.claro,
        width: '100%',
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

