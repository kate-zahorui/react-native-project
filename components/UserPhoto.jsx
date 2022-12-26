import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

const UserPhoto = () => {
  const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);

  return (
    <View style={styles.userImage}>
      <View style={styles.photoContainer}>
        <Image
          style={styles.photo}
          source={require("../assets/images/user-photo.png")}
        />
      </View>

      <Image
        style={styles.btnIcon}
        source={
          isPhotoUploaded
            ? require("../assets/images/delete.png")
            : require("../assets/images/add.png")
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userImage: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  photoContainer: {
    flex: 1,
    borderRadius: 16,
    overflow: "hidden",
  },
  photo: {
    width: "100%",
    resizeMode: "cover",
  },
  btnIcon: {
    position: "absolute",
    right: -12,
    bottom: 14,
    width: 25,
    height: 25,
  },
});

export default UserPhoto;
