import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { page } from "./Atoms";
import { useRecoilState } from "recoil";

const MenuBar = () => {
  const [currentPage, setCurrentPage] = useRecoilState(page);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => setCurrentPage("Home")}
      >
        <Ionicons name="ios-leaf" size={24} color="black" />
        <Text style={styles.menuItemText}>My Plant</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.menuItem}
        onPress={() => setCurrentPage("Notifications")}
      >
        <Ionicons name="notifications" size={24} color="black" />
        <Text style={styles.menuItemText}>Notifications</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => setCurrentPage("Profile")}
      >
        <Ionicons name="ios-person" size={24} color="black" />
        <Text style={styles.menuItemText}>Profile</Text>
      </TouchableOpacity>
      
    </View>
  );
};
``;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: '#CFFFDB',
    height: 89,
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  menuItem: {
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    bottom: 15
  },
  menuItemText: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default MenuBar;
