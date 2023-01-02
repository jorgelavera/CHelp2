import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { COLORS } from '../constants';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Tipos")}
      >
        <Text style={styles.text}>LISTA DE TAREAS</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.claro,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: COLORS.principal,
    borderRadius: 100 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 60,
  },
  text: {
    fontSize: 20,
  }
});
