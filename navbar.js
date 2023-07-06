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
import tw from "twrnc";

const MenuItem = ({ icon, text, page }) => {
  const [currentPage, setCurrentPage] = useRecoilState(page);
  return (
    <TouchableOpacity
      style={tw`flex flex-col gap-1 items-center`}
      onPress={() => setCurrentPage(page)}
    >
      <Ionicons name={icon} size={24} style={tw`text-green-950`} />
      <Text style={tw`text-sm`}>{text}</Text>
    </TouchableOpacity>
  );
};
const MenuBar = () => {
  return (
    <View
      style={tw`flex flex-row justify-around items-center bg-green-100 h-22`}
    >
      <MenuItem icon="ios-leaf" text="My Plant" page="Home" />
      <MenuItem icon="notification" text="Notifications" page="Notifications" />
      <MenuItem icon="ios-person" text="Profile" page="Profile" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {˝
    flexDirection: "row",
    //backgroundColor: '#7ACC7A',
    height: 50,
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 34,
    left: 0,
    right: 0,
  },
  menuItem: {
    flexDirection: "column",
    alignItems: "center",
  },
  menuItemText: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default MenuBar;
