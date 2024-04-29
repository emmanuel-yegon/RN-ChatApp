import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { UserType } from "../UserContext";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";
import axios from "axios";

export default function HomeScreen() {
  const navigation = useNavigation();
  const { userId, setUserId } = useContext(UserType);
  const [users, setUsers] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Swift Chat</Text>
      ),
      headerRight: () => (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Ionicons name="chatbox-ellipses-outline" size={24} color="black" />
          <MaterialIcons name="people-outline" size={24} color="black" />
        </View>
      ),
    });
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = await AsyncStorage.getItem("authToken");
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
      setUserId(userId);

      axios
        .get(`http://192.168.43.151:8000/users/${userId}`)
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.log("error retrieving users", error);
        });
    };

    fetchUsers();
  }, []);

  //console.log("users", users);
  return (
    <View>
      <Text style={{ marginTop: 300 }}>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
