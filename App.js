import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { RecoilRoot, useRecoilState } from "recoil";
import { page } from "./Atoms";
import Stack from "./HomeScreen";
import NotificationsScreen from "./NotificationScreen";
import MenuBar from "./navbar";
import tw from "twrnc";


function HomeScreen() {
  return <Stack />;
}

function Notifications() {
  return <NotificationsScreen />;
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function NavigatedHomeScreen() {
  const [currentPage, setCurrentPage] = useRecoilState(page);
  return (
    (currentPage == "Home" && <HomeScreen />) ||
    (currentPage == "Notifications" && <Notifications />) ||
    (currentPage == "Profile" && <ProfileScreen />)
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <View
        style={{
          flex: 1,
          backgroundColor: "#CFFFDB",
          alignItems: "stretch",
          justifyContent: "center",
        }} /*style={styles.container}*/
      >
        {/* <AppHeader /> */}
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <StatusBar style="auto" />
        <NavigatedHomeScreen />
        <MenuBar />
      </View>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tw`bg-green-200`,
    alignItems: "center",
    justifyContent: "center",
  },
});
