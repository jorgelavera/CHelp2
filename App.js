import { useFonts } from "expo-font";
import MainNavigator from "./src/navigation";
import { Provider } from "react-redux";
import store from './src/store'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAw67viTBfPEkRBOLSTbW8BaC78iEQdm3c",
  authDomain: "chelp-bd8ce.firebaseapp.com",
  projectId: "chelp-bd8ce",
  storageBucket: "chelp-bd8ce.appspot.com",
  messagingSenderId: "703304842244",
  appId: "1:703304842244:web:413bf24746835d6e944951"
};

function App() {
  const app = initializeApp(firebaseConfig);
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
