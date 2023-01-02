import { useFonts } from "expo-font";
import MainNavigator from "./src/navigation/MainNavigator";
import { Provider } from "react-redux";

import store from './src/store'

function App() {

  const [fonstLoaded] = useFonts({
    Nunito: require("./src/fonts/Nunito-Bold.ttf"),
  });

  if (!fonstLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App
