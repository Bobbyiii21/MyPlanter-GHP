import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native";

const { width } = Dimensions.get("window");
const boxWidth = width / 2; //(width - 40) / 2; // Divide available width by 2 for two columns

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { tw } from "twnrc";

const MainHomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#7ACC7A",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 95,
      }}
    >
      {/* <ScrollView contentContainerStyle={styles.scrollViewContainer}> */}

      {/* <Text
        style={{
          fontSize: 13,
          left: -120,
          top: 0,
        }}
      >
        Good Morning, Welcome to
      </Text>
      <Text style={{ fontSize: 30, fontWeight: "bold", left: -130 }}>
        MyPlanter
      </Text> */}

      <View style={styles.column}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Plant 1")}
          style={[styles.rectangleBox, { width: boxWidth }]}
        >
          <ImageBackground
            style={styles.Image}
            source={require("./assets/Plant1.jpeg")}
            resizeMode="cover"
            blurRadius={10}
            opacity={0.5}
          />
          <Text style={styles.textBoxText}>Box 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Plant 2")}
          style={[styles.rectangleBox, { width: boxWidth }]}
        >
          <ImageBackground
            style={styles.Image}
            source={require("./assets/Plant2.jpeg")}
            resizeMode="cover"
            blurRadius={10}
            opacity={0.5}
          />
          <Text style={styles.textBoxText}>Box 2</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.column}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Plant 3")}
          style={[styles.rectangleBox, { width: boxWidth }]}
        >
          <ImageBackground
            style={styles.Image}
            source={require("./assets/Plant3.jpeg")}
            resizeMode="cover"
            blurRadius={10}
            opacity={0.5}
          />
          <Text style={styles.textBoxText}>Box 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Plant 4")}
          style={[styles.rectangleBox, { width: boxWidth }]}
        >
          <ImageBackground
            style={styles.Image}
            source={require("./assets/Plant4.jpg")}
            resizeMode="cover"
            blurRadius={10}
            opacity={0.5}
          />
          <Text style={styles.textBoxText}>Box 4</Text>
        </TouchableOpacity>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

const Plant1 = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7ACC7A",
      }}
    >
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
const Plant2 = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7ACC7A",
      }}
    >
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
const Plant3 = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7ACC7A",
      }}
    >
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
const Plant4 = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7ACC7A",
      }}
    >
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7ACC7A",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 95,
  },
  scrollViewContainer: {
    paddingHorizontal: 20,
  },
  column: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0,
  },
  rectangleBox: {
    height: 370,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  textBoxText: {
    color: "white",
    fontSize: 20,
    position: "absolute",
    top: 150,
    fontWeight: "bold",
  },
  Image: {
    width: boxWidth,
    height: 370,
  },
  DarkOverlay: {
    color: "black",
    opacity: 0.2,
    width: boxWidth,
    height: 340,
  },
  Headingcontainer: {
    position: "absolute",
    top: 80,
    left: 0,
    paddingTop: 20,
    paddingHorizontal: 16,
    //backgroundColor: '#ffffff',
    zIndex: 1,
  },
  Headingheading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  Headingglyph: {
    position: "absolute",
    top: 0,
    right: 3,
    paddingTop: 25,
    paddingHorizontal: 0,
    //backgroundColor: '#ffffff',
    zIndex: 1,
    fontSize: 30,
  },
  headingwelcome: {
    fontSize: 13,
  },
});

const Stack = createStackNavigator();
function MyStack() {
  return (
    <NavigationContainer documentTitle={{ enabled: false }}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerStyle: { backgroundColor: "#7ACC7A" } }}
      >
        {/* Rename the Heading */}
        <Stack.Screen
          name="Home"
          component={MainHomeScreen}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen name="Plant 1" component={Plant1} />
        <Stack.Screen name="Plant 2" component={Plant2} />
        <Stack.Screen name="Plant 3" component={Plant3} />
        <Stack.Screen name="Plant 4" component={Plant4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
