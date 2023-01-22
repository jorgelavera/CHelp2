import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../constants/index.js";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default LoginNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.claro },
        headerTintColor: COLORS.principal,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};