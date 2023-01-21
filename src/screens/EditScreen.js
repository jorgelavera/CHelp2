import { StyleSheet, View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import { useSelector, connect } from 'react-redux';
import { COLORS } from '../constants';
import DeviceLocation from "../components/LocationSelector";

const EditScreen = () => {
    console.log('* EditScreen *')
    return (
        <View style={styles.container}>
                <Text style={styles.label}>Ubicación</Text>
                <Text >{DeviceLocation()}</Text>
        </View>
    );
}

export default connect()(EditScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.claro,
        width: '100%',
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
        marginTop: 26,
        backgroundColor: COLORS.secundario,
        width: "100%",
    },
});