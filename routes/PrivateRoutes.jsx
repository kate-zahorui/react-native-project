import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { CreatePostsScreen, PostsScreen, ProfileScreen } from "../screens/main";

const MainTab = createBottomTabNavigator();

const PrivateRoutes = () => {
  return (
    <MainTab.Navigator initialRouteName="Posts" backBehavior="initialRoute ">
      <MainTab.Screen name="Posts" component={PostsScreen} />
      <MainTab.Screen name="CreatePosts" component={CreatePostsScreen} />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  );
};

export default PrivateRoutes;
