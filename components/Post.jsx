import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";

import { PostPhoto } from "./";

const Post = ({ navigation, postData }) => {
  return (
    <View style={styles.postContainer}>
      <PostPhoto photo={postData.url} />
      <Text style={styles.title}>{postData.title}</Text>
      <View style={styles.info}>
        <View style={styles.actions}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate("Комментарии", { photo: postData.url });
            }}
            style={styles.link}
          >
            <Feather name="message-circle" size={18} color="#FF6C00" />
            <Text style={{ ...styles.actionsText, marginRight: 24 }}>
              {postData.info.comments}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.link}>
            <Feather name="thumbs-up" size={18} color="#FF6C00" />
            <Text style={styles.actionsText}>{postData.info.likes}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.location}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate("Карта");
            }}
            style={styles.link}
          >
            <SimpleLineIcons name="location-pin" size={18} color="#BDBDBD" />
            <Text style={styles.locationText}>{postData.info.location}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 32,
    width: "100%",
    color: "#212121",
  },
  info: {
    fontFamily: "Roboto-Regular",
  },
  title: {
    marginTop: 8,
    marginBottom: 8,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    // lineHeight: 1.19,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  link: {
    flexDirection: "row",
  },
  actions: {
    flexDirection: "row",
  },
  actionsText: {
    marginLeft: 10,
    fontSize: 16,
    // lineHeight: 1.19,
  },
  location: {
    flexDirection: "row",
  },
  locationText: {
    marginLeft: 9,
    textDecorationLine: "underline",
    fontSize: 16,
    // lineHeight: 1.19,
  },
});

export default Post;
