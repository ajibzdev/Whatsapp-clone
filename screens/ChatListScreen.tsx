import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import ChatListItem from "../components/ChatListItem";
import chats from "../assets/data/chats";

const ChatScreen = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={chats}
        renderItem={({ item }) => (
          <ChatListItem
            user={item.user}
            id={item.id}
            lastMessage={item.lastMessage}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
