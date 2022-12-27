import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

const CommentForm = ({ onSubmit, onInputFocus }) => {
  const [comment, setComment] = useState("");

  const handleInputChange = (value) => {
    setComment(value);
  };

  const handleFormSubmit = () => {
    if (!comment) return;

    onSubmit(comment);
    setComment("");
  };

  return (
    <View style={{ ...styles.form }}>
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Комментировать..."
          value={comment}
          name="comment"
          onChangeText={handleInputChange}
          onFocus={() => onInputFocus()}
          required
          style={styles.input}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleFormSubmit}
          style={styles.formButton}
        >
          <AntDesign name="arrowup" size={16} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    flexGrow: 0,
    paddingBottom: 0,
  },
  inputBox: {
    justifyContent: "center",
    paddingLeft: 15,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  input: {
    justifyContent: "center",
    color: "#212121",
    fontSize: 16,
    lineHeight: 1.19,
    fontFamily: "Roboto-Medium",
  },
  formButton: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 8,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#FF6C00",
  },
});

export default CommentForm;
