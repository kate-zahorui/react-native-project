import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen, RegistrationScreen } from "../screens/auth";

const AuthStack = createNativeStackNavigator();

const PublicRoutes = () => {
  return (
    <AuthStack.Navigator initialRouteName="Registration">
      <AuthStack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default PublicRoutes;
