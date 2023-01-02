import { StyleSheet, View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { COLORS } from '../constants';
import itemTipo from '../components/itemTipo';
import { selectTipo } from '../store/actions/tipo.actions';
import { TIPOS } from '../data/Tipos';

const ListaTareas = ({ navigation }) => {
    const dispatch = useDispatch();
    const tipo = TIPOS ;//useSelector(state => state.tipos.selected);
    console.log(TIPOS);

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
            onSelected={handlerSelectedTipo} />
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
