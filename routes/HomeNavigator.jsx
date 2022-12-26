import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CommentsScreen, MapScreen, PostsScreen } from "../screens/main";

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Публикации">
      <HomeStack.Screen
        name="Публикации"
        component={PostsScreen}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <HomeStack.Screen
        name="Комментарии"
        component={CommentsScreen}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <HomeStack.Screen
        name="Карта"
        component={MapScreen}
        options={{
          headerTitleAlign: "center",
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
