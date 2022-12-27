import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

const BackBtn = ({ onClick }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onClick}
      style={styles.button}
    >
      <AntDesign
        name="arrowleft"
        size={24}
        color="#212121"
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingLeft: 16,
  },
  icon: {
    opacity: 0.8,
  },
});

export default BackBtn;
