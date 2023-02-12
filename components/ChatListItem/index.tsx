import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { ChatType } from "../../types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigation } from "@react-navigation/native";
dayjs.extend(relativeTime);

const ChatListItem = ({ user, lastMessage, id }: ChatType) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("ChatScreen");
      }}
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: user.image,
          }}
          style={styles.image}
        />

        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.name} numberOfLines={1}>
              {user.name}
            </Text>
            <Text style={styles.subTitle}>
              {dayjs(lastMessage.createdAt).fromNow(true)}
            </Text>
          </View>
          <Text style={styles.subTitle} numberOfLines={2}>
            {lastMessage.text}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    borderRadius: 60,
    resizeMode: "cover",
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
    alignItems: "center",
  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  subTitle: {
    color: "gray",
  },
});
