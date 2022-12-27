import React from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

const LogoutBtn = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      //   onPress={handleLogout}
      style={styles.button}
    >
      <Feather name="log-out" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default LogoutBtn;
