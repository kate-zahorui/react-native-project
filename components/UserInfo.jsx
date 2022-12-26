import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image
          style={styles.photo}
          source={require("../assets/images/user-photo-mini.png")}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Natali Romanova</Text>
        <Text style={styles.email}>email@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    width: "100%",
  },
  photoContainer: {
    marginRight: 8,
    width: 60,
    height: 60,
    borderRadius: 16,
    overflow: "hidden",
  },
  photo: {
    resizeMode: "cover",
  },
  infoContainer: {
    color: "#212121",
  },
  name: {
    fontSize: 13,
    // lineHeight: 1.15,
    fontFamily: "Roboto-Bold",
  },
  email: {
    opacity: 0.8,
    fontSize: 11,
    // lineHeight: 1.18,
    fontFamily: "Roboto-Regular",
  },
});

export default UserInfo;
