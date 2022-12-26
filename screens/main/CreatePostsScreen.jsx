import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { CameraBtn, DeleteBtn, PostPhoto } from "../../components";

const initialFormState = {
  title: "",
  location: "",
};

const CreatePostsScreen = ({ navigation }) => {
  const [form, setForm] = useState(initialFormState);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isPhotoChosen, setIsPhotoChosen] = useState(true);
  const [photo, setPhoto] = useState(
    require("../../assets/images/photo-example-1.png")
  );

  const handleKeyboardHide = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const handleInputFocus = (e) => {
    setIsKeyboardShown(true);
  };

  const handleTitleChange = (value) => {
    setForm((prevState) => ({ ...prevState, title: value }));
  };

  const handleLocationChange = (value) => {
    setForm((prevState) => ({ ...prevState, location: value }));
  };

  const handleFormSubmit = () => {
    if (!isPhotoChosen) return;

    setIsKeyboardShown(false);
    Keyboard.dismiss();
    console.log(form);
    setForm(initialFormState);
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.contentContainer}>
          <View
            style={
              !isKeyboardShown
                ? styles.photoSection
                : { ...styles.photoSection, marginBottom: 0 }
            }
          >
            <View style={styles.photoContainer}>
              {isPhotoChosen ? (
                <PostPhoto photo={photo} />
              ) : (
                <View style={styles.cameraContainer}></View>
              )}

              <CameraBtn isPhotoChosen={isPhotoChosen} />
            </View>
            {!isKeyboardShown && (
              <Text style={styles.photoText}>
                {isPhotoChosen ? "Редактировать фото" : "Загрузите фото"}
              </Text>
            )}
          </View>

          <View style={styles.form}>
            <View style={styles.inputBox}>
              <TextInput
                placeholder="Название..."
                value={form.title}
                name="title"
                onChangeText={handleTitleChange}
                onFocus={handleInputFocus}
                required
                style={{ ...styles.input, fontFamily: "Roboto-Regular" }}
              />
            </View>
            <View
              style={{
                ...styles.inputBox,
                marginBottom: isKeyboardShown ? 10 : 32,
              }}
            >
              <SimpleLineIcons
                name="location-pin"
                size={18}
                color="#BDBDBD"
                style={styles.inputIcon}
              />
              <TextInput
                placeholder="Местность..."
                value={form.location}
                name="location"
                onChangeText={handleLocationChange}
                onFocus={handleInputFocus}
                required
                style={styles.input}
              />
            </View>

            {!isKeyboardShown && (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleFormSubmit}
                style={
                  isPhotoChosen ? styles.formButton : styles.formButtonDisabled
                }
              >
                <Text
                  style={
                    isPhotoChosen
                      ? styles.formButtonText
                      : styles.formButtonTextDisabled
                  }
                >
                  Опубликовать
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <DeleteBtn
          onClick={() => {
            navigation.goBack();
          }}
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
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#ffffff",
    fontFamily: "Roboto-Regular",
  },
  contentContainer: {
    width: "100%",
  },
  photoSection: {
    marginBottom: 32,
  },
  photoContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraContainer: {
    marginBottom: 8,
    width: "100%",
    height: 240,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },

  photoText: {
    color: "#BDBDBD",
    fontSize: 16,
    // lineHeight: 1.19,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  input: {
    color: "#212121",
    // font
    fontSize: 16,
    lineHeight: 1.19,
  },
  inputIcon: {
    marginRight: 8,
  },
  formButton: {
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 25,
    backgroundColor: "#FF6C00",
  },
  formButtonDisabled: {
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 25,
    backgroundColor: "#F6F6F6",
  },
  formButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    // lineHeight: 1.19,
  },
  formButtonTextDisabled: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    // lineHeight: 1.19,
    color: "#BDBDBD",
  },
});

export default CreatePostsScreen;
