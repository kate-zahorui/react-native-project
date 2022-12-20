import React, { useState } from "react";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const [form, setForm] = useState(initialState);

  const handleKeyboardHide = () => {
    Keyboard.dismiss();
  };

  const handleEmailChange = (value) => {
    setForm((prevState) => ({ ...prevState, email: value }));
  };

  const handlePasswordChange = (value) => {
    setForm((prevState) => ({ ...prevState, password: value }));
  };

  const handleFormSubmit = () => {
    Keyboard.dismiss();
    console.log(form);
    setForm(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Войти</Text>
          </View>
          <View style={styles.form}>
            <View>
              <TextInput
                placeholder="Адрес электронной почты "
                value={form.email}
                onChangeText={handleEmailChange}
                style={styles.input}
              />
            </View>
            <View>
              <TextInput
                placeholder="Пароль"
                value={form.password}
                onChangeText={handlePasswordChange}
                style={styles.input}
              />
              <Button title="Показать" style={styles.showPasswordBtn} />
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleFormSubmit}
              style={styles.formButton}
            >
              <Text style={styles.formButtonText}>Войти</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Button
              title="Нет аккаунта? Зарегистрироваться"
              style={styles.button}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {},
  contentContainer: {},
  header: {},
  headerText: {},
  form: {},
  input: {},
  showPasswordBtn: {},
  formButton: {},
  formButtonText: {},
  button: {},
});

export default LoginScreen;
