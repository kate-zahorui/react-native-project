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
  name: "",
  email: "",
  password: "",
};

const RegistrationScreen = () => {
  const [form, setForm] = useState(initialState);

  const handleKeyboardHide = () => {
    Keyboard.dismiss();
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
    Keyboard.dismiss();
    console.log(form);
    setForm(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.userImage}></View>

          <View style={styles.header}>
            <Text style={styles.headerText}>Регистрация</Text>
          </View>

          <View style={styles.form}>
            <View>
              <TextInput
                placeholder="Логин"
                value={form.name}
                onChangeText={handleLoginChange}
                style={styles.input}
              />
            </View>
            <View>
              <TextInput
                placeholder="Адрес электронной почты"
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
              <Text style={styles.formButtonText}>Зарегистрироваться</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Button title="Уже есть аккаунт? Войти" style={styles.button} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {},
  contentContainer: {},
  userImage: {},
  header: {},
  headerText: {},
  form: {},
  input: {},
  showPasswordBtn: {},
  formButton: {},
  formButtonText: {},
  button: {},
});

export default RegistrationScreen;
