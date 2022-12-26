import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

import { CommentsScreen, MapScreen, PostsScreen } from "../screens/main";
import { LogoutBtn } from "../components";

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Публикации">
      <HomeStack.Screen
        name="Публикации"
        component={PostsScreen}
        options={{
          headerTitleAlign: "center",
          headerRight: () => <LogoutBtn />,
          headerStyle: styles.header,
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

const styles = StyleSheet.create({
  headerContainer: {
    // height: 88,
    // paddingBottom: 10,
    // paddingLeft: 16,
    // paddingRight: 16,
    // alignItems: "space-between",
    // justifyContent: "flex-end",
  },
  header: {
    // height: 88,
    // paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
    // alignItems: "flex-end",
    // justifyContent: "flex-end",
    backgoundColor: "#3a4cdd",
  },
});

export default HomeNavigator;
