import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons, AntDesign, Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import { CreatePostsScreen } from "../screens/main";
import HomeNavigator from "./HomeNavigator";
import ProfileNavigator from "./ProfileNavigator";

const MainTab = createBottomTabNavigator();

const PrivateRoutes = () => {
  return (
    <MainTab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.container,
        tabBarItemStyle: styles.item,
        tabBarActiveBackgroundColor: "#FF6C00",
      }}
    >
      <MainTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <SimpleLineIcons
              name="grid"
              size={24}
              color={focused ? "#ffffff" : "#212121"}
            />
          ),
          headerShown: false,
        }}
      />
      <MainTab.Screen
        name="Создать публикацию"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="plus"
              size={24}
              color={focused ? "#ffffff" : "#212121"}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Профиль"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#ffffff" : "#212121"}
            />
          ),
          headerShown: false,
        }}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    minHeight: 65,
    backgroundColor: "#ffffff",
    boxShadow: "0px -0.5px 0px rgba(0, 0, 0, 0.3)",
  },
  item: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
    height: 40,
    maxWidth: 70,
    borderRadius: 20,
  },
});

export default PrivateRoutes;
