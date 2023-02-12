import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import bg from "../assets/images/BG.png";

const ChatScreen = () => {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <Text>ChatScreen</Text>
    </ImageBackground>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});
