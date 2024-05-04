import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { UserType } from "../UserContext";
import axios from "axios";
import FriendRequests from "../components/FriendRequests";

export default function FriendsScreen() {
  const { userId, setUserId } = useContext(UserType);
  const [friendRequests, setFriendRequests] = useState([]);

  useEffect(() => {
    fetchFriendRequets();
  }, []);

  const fetchFriendRequets = async () => {
    try {
      const response = await axios.get(
        `http://192.168.43.151:8000/friend-request/${userId}`
      );
      if (response.status === 200) {
        const friendRequestsData = response.data.map((friendRequest) => ({
          _id: friendRequest._id,
          name: friendRequest.name,
          email: friendRequest.email,
          image: friendRequest.image,
        }));

        setFriendRequests(friendRequestsData);
      }
    } catch (error) {
      console.log("error message", error);
    }
  };
  console.log(friendRequests);
  return (
    <View style={{ padding: 10, marginHorizontal: 12 }}>
      {friendRequests.length > 0 && <Text>Your Friend Requests</Text>}

      {friendRequests.map((item, index) => (
        <FriendRequests
          key={index}
          item={item}
          friendRequests={friendRequests}
          setFriendRequests={setFriendRequests}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
