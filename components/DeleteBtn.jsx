import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

const DeleteBtn = ({ onClick }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onClick}
      style={styles.deleteBtn}
    >
      <AntDesign name="delete" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deleteBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
  },
  cameraBtnIcon: {
    position: "absolute",
  },
});

export default DeleteBtn;
