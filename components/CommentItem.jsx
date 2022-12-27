import React from "react";

import { Image, StyleSheet, Text, View } from "react-native";

const CommentItem = ({ commentData }) => {
  return (
    <>
      {commentData.isOwnComment ? (
        <View style={styles.item}>
          <View
            style={{
              ...styles.messageContainer,
              marginRight: 16,
              borderTopRightRadius: 0,
            }}
          >
            <Text style={styles.message}>{commentData.message}</Text>
            <Text style={styles.date}>{commentData.date}</Text>
          </View>
          <View style={styles.photoContainer}>
            <Image style={styles.photo} source={commentData.userPhoto} />
          </View>
        </View>
      ) : (
        <View style={styles.item}>
          <View style={{ ...styles.photoContainer, marginRight: 16 }}>
            <Image style={styles.photo} source={commentData.userPhoto} />
          </View>
          <View style={{ ...styles.messageContainer, borderTopLeftRadius: 0 }}>
            <Text style={styles.message}>{commentData.message}</Text>
            <Text style={styles.date}>{commentData.date}</Text>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 24,
    flexDirection: "row",
    gap: 16,
  },
  photoContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    overflow: "hidden",
  },
  photo: {
    resizeMode: "cover",
  },
  messageContainer: {
    flexShrink: 1,
    flexGrow: 1,
    padding: 16,
    borderRadius: 6,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    fontFamily: "Roboto-Regular",
  },
  message: {
    marginBottom: 8,
    color: "#212121",
    fontSize: 13,
    // lineHeight: 1.38,
  },
  date: {
    color: "#BDBDBD",
    fontSize: 10,
    // lineHeight: 1.2,
  },
});

export default CommentItem;
