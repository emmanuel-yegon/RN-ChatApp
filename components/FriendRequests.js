import { Pressable, StyleSheet, Image, Text, View } from "react-native";
import React from "react";

export default function FriendRequests({
  item,
  friendRequests,
  setFriendRequests,
}) {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
      }}
    >
      <Image
        style={{ width: 50, height: 50, borderRadius: 25 }}
        source={{ uri: item.image }}
      />
      <Text
        style={{ fontSize: 15, fontWeight: "bold", marginLeft: 10, flex: 1 }}
      >
        {item?.name} sent you a friend request
      </Text>

      <Pressable
        style={{ backgroundColor: "#0066b2", padding: 10, borderRadius: 6 }}
      >
        <Text style={{ textAlign: "center", color: "white" }}>Accept</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
