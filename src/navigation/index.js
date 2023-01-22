import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import LoginNavigator from "./LoginNavigation";
import MainNavigator from "./MainNavigator";

export default () => {
  const [userId, setUser] = useState(null);

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
  //{userId ? <MainNavigator /> : <LoginNavigator />}
};