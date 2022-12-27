import React from "react";
import { ImageBackground, Text, StyleSheet, View } from "react-native";
import { LogoutBtn, UserPhoto, PostsList } from "../../components";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../../assets/images/background.png")}
      >
        <View style={styles.contentContainer}>
          <UserPhoto />
          <View style={styles.btnContainer}>
            <LogoutBtn />
          </View>

          <Text style={styles.userName}>Natali Romanova</Text>
          <PostsList navigation={navigation} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    height: 812,
    paddingTop: 150,
    resizeMode: "contain",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 92,
    paddingBottom: 110,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    fontFamily: "Roboto-Regular",
  },
  btnContainer: {
    position: "absolute",
    right: 6,
    top: 22,
  },
  userName: {
    marginBottom: 33,
    color: "#212121",
    fontSize: 30,
    // lineHeight: 1.17,
    fontFamily: "Roboto-Medium",
  },
});

export default ProfileScreen;
