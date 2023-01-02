import { StyleSheet, View, FlatList } from 'react-native';
import { COLORS } from '../constants';
import { TIPOS } from '../data/Tipos';
import itemTipo from '../components/itemTipo';

const ListaTipos = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={TIPOS}
                renderItem={itemTipo}
                keyExtractor={item => item.id}
                horizontal={false}
            />
        </View>
    );
}

export default ListaTipos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.claro,
        width: '100%',
    },
});
