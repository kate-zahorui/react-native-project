import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Post } from "./";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    url: require("../assets/images/photo-example-1.png"),
    title: "Лес",
    info: {
      comments: 8,
      likes: 153,
      location: "Ukraine",
    },
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    url: require("../assets/images/photo-example-2.png"),
    title: "Закат на Черном море",
    info: {
      comments: 3,
      likes: 200,
      location: "Ukraine",
    },
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    url: require("../assets/images/photo-example-3.png"),
    title: "Старый домик в Венеции",
    info: {
      comments: 50,
      likes: 200,
      location: "Italy",
    },
  },
];

const PostsList = () => {
  const renderItem = ({ item }) => <Post postData={item} />;

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: "center",
    width: "100%",

    backgroundColor: "#2a3d4h",
  },
  list: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default PostsList;
