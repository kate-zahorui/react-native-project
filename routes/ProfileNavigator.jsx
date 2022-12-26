import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CommentsScreen, MapScreen, ProfileScreen } from "../screens/main";

const ProfileStack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator initialRouteName="Страница пользователя">
      <ProfileStack.Screen
        name="Страница пользователя"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name="Комментарии"
        component={CommentsScreen}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <ProfileStack.Screen
        name="Карта"
        component={MapScreen}
        options={{
          headerTitleAlign: "center",
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
