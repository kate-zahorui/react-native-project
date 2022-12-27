import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons, AntDesign, Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import { CreatePostsScreen, PostsScreen, ProfileScreen } from "../screens/main";
import { LogoutBtn } from "../components";

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Публикации"
      backBehavior="initialRoute"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.container,
        tabBarItemStyle: styles.item,
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarHideOnKeyboard: true,
      }}
    >
      <BottomTabs.Screen
        name="Публикации"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <SimpleLineIcons
              name="grid"
              size={24}
              color={focused ? "#ffffff" : "#212121"}
            />
          ),
          headerTitleAlign: "center",
          headerRight: () => <LogoutBtn />,
        }}
      />
      <BottomTabs.Screen
        name="Создать публикацию"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="plus"
              size={24}
              color={focused ? "#ffffff" : "#212121"}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Профиль"
        component={ProfileScreen}
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
    </BottomTabs.Navigator>
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

export default BottomTabsNavigator;
