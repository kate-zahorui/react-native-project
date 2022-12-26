import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const CameraBtn = ({ isPhotoChosen }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      // onPress={() => {}}
      style={styles.cameraBtn}
    >
      <View
        style={
          !isPhotoChosen
            ? styles.cameraBtnBackground
            : { ...styles.cameraBtnBackground, opacity: 0.3 }
        }
      ></View>
      <FontAwesome
        name="camera"
        size={24}
        color={isPhotoChosen ? "#ffffff" : "#BDBDBD"}
        style={styles.cameraBtnIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cameraBtn: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  cameraBtnBackground: {
    flex: 1,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ffffff",
  },
  cameraBtnIcon: {
    position: "absolute",
  },
});

export default CameraBtn;
