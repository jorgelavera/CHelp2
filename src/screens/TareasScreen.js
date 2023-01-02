import { StyleSheet, View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { COLORS } from '../constants';
import { TIPOS } from '../data/Tipos';
import { selectTipo } from '../store/actions/tipo.actions';

const ListaTareas = ({ item, onSelected }) => {
    const dispatch = useDispatch();
    const tipo = TIPOS ;//useSelector(state => state.tipos.selected);

    const handlerSelectedTipo = (itemTipo) => {
        console.log('handlerSelectedTipo:');
        dispatch(selectTipo(itemTipo));
        navigation.push('Tarea', {
            name: itemTipo.titulo
        })
    }

    const renderGridItem = (itemData) => (
        <TipoGridTitle
            item={itemData.item}
            onSelected={handlerSelectedTipo}
            onPress={() => onSelected(item)} />
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={tipo}
                renderItem={renderGridItem}
                keyExtractor={item => item.id}
                horizontal={true}
            />
        </View>
    );
}

export default ListaTareas;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.claro,
        width: '100%',
    },
});
