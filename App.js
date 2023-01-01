import { useFonts } from "expo-font";
import MainNavigator from "./src/navigation/MainNavigator";

function App() {

  const [fonstLoaded] = useFonts({
    Nunito: require("./src/fonts/Nunito-Bold.ttf"),
  });

  if (!fonstLoaded) {
    return null;
  }

  return (
    <MainNavigator />
  );
};

export default App
