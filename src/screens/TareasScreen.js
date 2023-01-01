import { StyleSheet, View, TouchableOpacity, Text, FlatList, Image } from 'react-native';
import { COLORS } from '../constants';
import { TIPOS } from '../data/Tipos';
import itemTipo from '../components/itemTipo';

const ListaTareas = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={TIPOS}
                renderItem={itemTipo}
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
