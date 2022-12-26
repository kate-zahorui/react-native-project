import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const LogoutBtn = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      //   onPress={handleLogout}
    >
      <Feather name="log-out" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

export default LogoutBtn;
