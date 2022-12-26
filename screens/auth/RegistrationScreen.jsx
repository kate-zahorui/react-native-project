import React, { useState } from "react";

import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { UserPhoto } from "../../components";

const initialFormState = {
  name: "",
  email: "",
  password: "",
};

const initialFocusState = {
  name: false,
  email: false,
  password: false,
};

const RegistrationScreen = ({ navigation }) => {
  const [form, setForm] = useState(initialFormState);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isOnFocus, setIsOnFocus] = useState(initialFocusState);

  const handleKeyboardHide = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const handleInputFocus = (e) => {
    setIsKeyboardShown(true);

    const { name } = e.target._internalFiberInstanceHandleDEV.memoizedProps;
    setIsOnFocus((prevState) => ({ ...prevState, [name]: true }));
  };

  const handleInputBlur = () => {
    setIsOnFocus(initialFocusState);
  };

  const changePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const handleLoginChange = (value) => {
    setForm((prevState) => ({ ...prevState, name: value }));
  };

  const handleEmailChange = (value) => {
    setForm((prevState) => ({ ...prevState, email: value }));
  };

  const handlePasswordChange = (value) => {
    setForm((prevState) => ({ ...prevState, password: value }));
  };

  const handleFormSubmit = () => {
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
        <ImageBackground
          style={styles.background}
          source={require("../../assets/images/background.png")}
        >
          <View
            style={{
              ...styles.contentContainer,
              paddingBottom: isKeyboardShown ? 32 : 45,
            }}
          >
            <UserPhoto />

            <View style={styles.header}>
              <Text style={styles.headerText}>Регистрация</Text>
            </View>

            <View style={styles.form}>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="Логин"
                  placeholderTextColor="#BDBDBD"
                  value={form.name}
                  name="name"
                  onChangeText={handleLoginChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  required
                  style={
                    isOnFocus.name
                      ? {
                          ...styles.input,
                          ...styles.inputOnFocus,
                        }
                      : styles.input
                  }
                />
              </View>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="Адрес электронной почты"
                  placeholderTextColor="#BDBDBD"
                  keyboardType="email-address"
                  value={form.email}
                  name="email"
                  onChangeText={handleEmailChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  required
                  style={
                    isOnFocus.email
                      ? {
                          ...styles.input,
                          ...styles.inputOnFocus,
                        }
                      : styles.input
                  }
                />
              </View>
              <View
                style={{
                  ...styles.passwordBox,
                  marginBottom: isKeyboardShown ? 0 : 43,
                }}
              >
                <TextInput
                  secureTextEntry={isPasswordShown ? false : true}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  value={form.password}
                  name="password"
                  onChangeText={handlePasswordChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  required
                  style={
                    isOnFocus.password
                      ? {
                          ...styles.input,
                          ...styles.inputOnFocus,
                        }
                      : styles.input
                  }
                />

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={changePasswordVisibility}
                  style={styles.showPasswordBtn}
                >
                  <Text style={styles.showPasswordBtnText}>
                    {isPasswordShown ? "Скрыть" : "Показать"}
                  </Text>
                </TouchableOpacity>
              </View>

              {!isKeyboardShown && (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={handleFormSubmit}
                  style={styles.formButton}
                >
                  <Text style={styles.formButtonText}>Зарегистрироваться</Text>
                </TouchableOpacity>
              )}
            </View>

            {!isKeyboardShown && (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate("Login");
                }}
                style={styles.link}
              >
                <Text style={styles.linkText}>Уже есть аккаунт? Войти</Text>
              </TouchableOpacity>
            )}
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
  background: {
    flex: 1,
    height: 812,
    bottom: undefined,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  contentContainer: {
    alignItems: "center",
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    fontFamily: "Roboto-Regular",
  },
  userImage: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  btnIcon: {
    position: "absolute",
    right: -12,
    bottom: 14,
    width: 25,
    height: 25,
  },
  header: {
    marginBottom: 32,
  },
  headerText: {
    color: "#212121",
    fontSize: 30,
    // lineHeight: 1.17,
    fontFamily: "Roboto-Medium",
  },
  form: {
    marginBottom: 16,
    width: "100%",
  },
  inputBox: {
    marginBottom: 16,
  },
  input: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    color: "#212121",
    fontSize: 16,
    // lineHeight: 1.19,
  },
  inputOnFocus: {
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
    color: "#212121",
  },
  passwordBox: {
    justifyContent: "center",
  },
  showPasswordBtn: {
    position: "absolute",
    right: 16,
    backgroundColor: "transparent",
  },
  showPasswordBtnText: {
    color: "#1B4371",
    fontSize: 16,
    // lineHeight: 1.19,
  },
  formButton: {
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 25,
    backgroundColor: "#FF6C00",
  },
  formButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    // lineHeight: 1.19,
  },
  link: {
    backgroundColor: "transparent",
  },
  linkText: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    // lineHeight: 1.19,
  },
});

export default RegistrationScreen;
