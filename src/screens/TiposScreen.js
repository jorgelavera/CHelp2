import { StyleSheet, View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import { COLORS } from '../constants';

import { useSelector, useDispatch, connect } from 'react-redux';
import { selectedTipo } from '../store/actions/tipo.actions';
import { filteredTarea } from '../store/actions/tarea.actions';


const ListaTiposScreen = ({ navigation }) => {
    const tipos = useSelector((state) => state.tipos.tipos);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <FlatList
                data={tipos}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                dispatch(selectedTipo(item.id));
                                dispatch(filteredTarea(item.id));
                                console.log('***1');
                                console.log(selectedTipo(item.id));
                                console.log('***2');
                                console.log(item.id);
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

export default connect()(ListaTiposScreen);

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
