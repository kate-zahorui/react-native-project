import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { CommentForm, CommentsList } from "../../components";
import { useKeyboardHeight } from "../../services/hooks/useKeyboardHeight";

const CommentsScreen = ({ route }) => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const keyboardHeight = useKeyboardHeight();

  const { photo } = route.params;

  const handleKeyboardHide = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const handleInputFocus = () => {
    setIsKeyboardShown(true);
  };

  const handleFormSubmit = (formData) => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();

    console.log(formData);
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={
          !isKeyboardShown
            ? styles.container
            : { ...styles.container, paddingBottom: keyboardHeight }
        }
      >
        <CommentsList photo={photo} isKeyboardShown={isKeyboardShown} />
        <CommentForm
          onSubmit={handleFormSubmit}
          onInputFocus={handleInputFocus}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 32,
    paddingBottom: 16,
    backgroundColor: "#ffffff",
  },
});

export default CommentsScreen;
