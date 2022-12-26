import React from "react";
import { View, StyleSheet } from "react-native";
import { PostsList, UserInfo } from "../../components";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <UserInfo />
      <PostsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 32,
    paddingBottom: 110,
    backgroundColor: "#ffffff",
  },
});

export default PostsScreen;
