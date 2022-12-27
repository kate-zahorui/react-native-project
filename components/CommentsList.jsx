import React from "react";

import { FlatList, StyleSheet, View } from "react-native";
import { CommentItem, PostPhoto } from "./";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5",
    userPhoto: require("../assets/images/comments-user-photo-2.png"),
    message:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    date: "09 июня, 2020 | 08:40",
    isOwnComment: false,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8",
    userPhoto: require("../assets/images/comments-user-photo-1.png"),
    message:
      "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    date: "09 июня, 2020 | 09:14",
    isOwnComment: true,
  },
  {
    id: "58694a0f-3da1-471f-bd96",
    userPhoto: require("../assets/images/comments-user-photo-2.png"),
    message: "Thank you! That was very helpful!",
    date: "09 июня, 2020 | 09:20",
    isOwnComment: false,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5000",
    userPhoto: require("../assets/images/comments-user-photo-2.png"),
    message:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    date: "09 июня, 2020 | 08:40",
    isOwnComment: false,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8000",
    userPhoto: require("../assets/images/comments-user-photo-1.png"),
    message:
      "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    date: "09 июня, 2020 | 09:14",
    isOwnComment: true,
  },
  {
    id: "58694a0f-3da1-471f-bd96000",
    userPhoto: require("../assets/images/comments-user-photo-2.png"),
    message: "Thank you! That was very helpful!",
    date: "09 июня, 2020 | 09:20",
    isOwnComment: false,
  },
];

const CommentsList = ({ photo, isKeyboardShown }) => {
  const renderItem = ({ item }) => <CommentItem commentData={item} />;

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        ListHeaderComponent={!isKeyboardShown && <PostPhoto photo={photo} />}
        ListHeaderComponentStyle={styles.photoContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: "center",
    width: "100%",
    flexShrink: 1,
  },
  list: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
  },
  photoContainer: {
    marginBottom: 32,
  },
});

export default CommentsList;
