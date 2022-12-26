import React from "react";
import { Image, StyleSheet, View } from "react-native";

const PostPhoto = ({ photo }) => {
  return (
    <View style={styles.photoContainer}>
      <Image style={styles.photo} source={photo} />
    </View>
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    marginBottom: 8,
    width: "100%",
    height: 240,
    borderRadius: 8,
    overflow: "hidden",
  },
  photo: {
    width: "100%",
    resizeMode: "cover",
  },
});

export default PostPhoto;
