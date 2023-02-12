import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://unsplash.com/photos/DwGJEhvNzzI" }}
        style={styles.image}
      />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            Lukas
          </Text>
          <Text style={styles.subTitle}>8:33</Text>
        </View>
        <Text style={styles.subTitle} numberofLines={2}>
          Last Message
        </Text>
      </View>
    </View>
  );
};

export default ChatListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,

    height: 70,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  content: {
    flex: 1,

    borderBottomWith: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  subTitle: {
    color: "gray",
  },
});
