import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CommentsScreen, MapScreen } from "../screens/main";
import BottomTabsNavigator from "./BottomTabsNavigator";

const Stack = createNativeStackNavigator();

const PrivateRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={BottomTabsNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Комментарии"
        component={CommentsScreen}
        options={{
          tabBarStyle: { display: "none" },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Карта"
        component={MapScreen}
        options={{
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export default PrivateRoutes;
