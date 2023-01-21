import { StyleSheet, View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import { useSelector, connect } from 'react-redux';
import { COLORS } from '../constants';

const RunScreen = () => {
    console.log('* RunScreen *')
    return (
        <View style={styles.container}>
        </View>
    );
}

export default connect()(RunScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.claro,
        width: '100%',
    },
});
